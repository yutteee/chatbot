<template>
    <div class="chats" ref="myModal">
        <div v-for="message in messages" :key="message.text">
            <YourMessage
                v-if="message.name !== $store.state.user_name"
                :message="message.text"
                :fileURL="message.file"
                :fileType="message.fileType"
                :fileName="message.fileName"
            ></YourMessage>
            <MyMessage 
                v-else
                :message="message.text"
                :fileURL="message.file"
                :fileType="message.fileType"
                :fileName="message.fileName"
            ></MyMessage>
        </div>
    </div>
    <div class="messages">
        <div class="previews">
            <FilePreview 
                v-for="(preview, index) in previewImgs" :key="preview"
                :previewURL="preview.image" 
                :previewType="preview.type"
                :previewName="preview.name" 
                @deletePreview="deleteFile(index)"
            ></FilePreview>
        </div>
        <div class="forms">
            <FileUpload v-on:change="selectFile"></FileUpload> 
            <MessageForm :message="inputMessage" @update:message="inputMessage = $event"></MessageForm>
            <MessageSendButton v-on:click="sendMessage" :color="isAbleToSend"></MessageSendButton>
        </div>
    </div>
</template>

<script>
import MessageForm from '../parts/users/MessageForm.vue';
import FileUpload from '../parts/users/FileUpload.vue';
import MessageSendButton from '../parts/users/MessageSendButton.vue';
import MyMessage from '../parts/users/MyMessage.vue';
import YourMessage from '../parts/users/YourMessage.vue';
import SocketioService from '../../services/socketio.service.js';
import FilePreview from '../parts/users/FilePreview.vue';

export default {
    components: {
        MessageForm,
        FileUpload,
        MessageSendButton,
        MyMessage,
        YourMessage,
        FilePreview
    },
    data () {
        return {
            roomID: 'room',
            inputMessage: '',
            messages: [],
            fileData: [],
            previewImgs: [],
        }
    },
    mounted() {
        SocketioService.getMessage((err, latestMessages) => {
            this.messages = latestMessages.map((message) => {
                if (message.text !== "") {
                    message.file = "";
                    return message;
                }
                const fileBlob = new Blob([message.file], {type: message.fileType});
                const fileURL = URL.createObjectURL(fileBlob);
                message.file = fileURL;
                return message;
            })
            console.log(this.messages);
            this.scrollToEnd();
        });
    },
    methods: {
        sendMessage : function() {
            const message = this.inputMessage;
            const spaceDeletedMessage = message.replace(/\s+/g, '');
            if (spaceDeletedMessage == '' && this.fileData.length == 0) return;

            const fileTypeArray = this.fileData.map((file) => file["type"]);
            const fileNameArray = this.fileData.map((file) => file["name"]);

            SocketioService.sendMessage(message, this.fileData, fileTypeArray, fileNameArray);
            console.log(this.fileData);

            this.inputMessage = '';
            this.fileData = [];
            this.previewImgs = [];
        },
        selectFile : function(event) {
            const maxFileSize = 1e8;
            if(event.target.files[0].size > maxFileSize) return alert("File size is too large.");

            const endIndex = this.fileData.length
            this.fileData[endIndex] = event.target.files[0];

            this.previewImgs = this.fileData.map((file) => {
                const type = file.type;
                const name = file.name;
                const image = this.createPreviewURL(type, file);
                const previewImg = { image, type, name };
                return previewImg;
            });
        },
        determineFileType: function(fileType, name) {
            return fileType.startsWith(name);
        },
        createPreviewURL : function(fileType, fileObject) {
            if (
                this.determineFileType(fileType, 'image/')
                || this.determineFileType(fileType, 'video/')
                || this.determineFileType(fileType, 'audio/')
            ) {
                return URL.createObjectURL(fileObject);
            } else {
                return '';
            }
        },
        scrollToEnd: function () {
            this.$nextTick(() => {
                this.$refs['myModal'].scrollTo(0, this.$refs['myModal'].scrollHeight + 1000)
            })
        },
        deleteFile: function (index) {
            this.fileData.splice(index, 1)
            this.previewImgs.splice(index, 1);
        } 
    },
    computed: {
        isAbleToSend() {
            const spaceDeletedMessage = this.inputMessage.replace(/\s+/g, '');
            if (spaceDeletedMessage == '' && this.fileData.length == 0) {
                return '#636363';
            } else {
                return '#0075ff';
            }
        },
    },
}

</script>

<style scoped>
.chats {
    height: calc(100% - 60px);
    overflow: scroll;
}

.messages {
    display: flex;
    align-items: center;
    height: auto;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 0 0 10px 10px;
    flex-wrap: wrap;
}

.previews {
    display: flex;
    align-items: center;
    max-width: 390px;
    width: 100%;
    overflow-x: scroll;
}

.forms {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 16px;
}

.messages::before {
    content: "";
    width: 90%;
    height: 2px;
    background: #ebebeb;
    display: inline-block;
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
}
</style>