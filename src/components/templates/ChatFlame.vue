<template>
    <div class="flame">
        <ChatHeader @childClick="closeChatModal"></ChatHeader>
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
            <div class="preview" v-for="(preview, index) in previewImgs" :key="preview">
                <ImagePreview :previewUrl="preview" @deletePreview="deleteFile(index)"></ImagePreview>
            </div>
            <div class="forms">
                <FileUpload v-on:change="selectFile"></FileUpload> 
                <MessageForm :message="inputMessage" @update:message="inputMessage = $event"></MessageForm>
                <MessageSendButton v-on:click="sendMessage" :color="isAbleToSend"></MessageSendButton>
            </div>
        </div>
    </div>
</template>

<script>
import ChatHeader from '../parts/users/ChatHeader.vue';
import MessageForm from '../parts/users/MessageForm.vue';
import FileUpload from '../parts/users/FileUpload.vue';
import MessageSendButton from '../parts/users/MessageSendButton.vue';
import MyMessage from '../parts/users/MyMessage.vue';
import YourMessage from '../parts/users/YourMessage.vue';
import SocketioService from '../../services/socketio.service.js';
import ImagePreview from '../parts/users/ImagePreview.vue';


export default {
    components: {
        ChatHeader,
        MessageForm,
        FileUpload,
        MessageSendButton,
        MyMessage,
        YourMessage,
        ImagePreview
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
    created() {
        SocketioService.setupSocketConnection();
        SocketioService.createRoom(this.$store.state.user_name, this.roomID)
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
            const endIndex = this.fileData.length
            this.fileData[endIndex] = event.target.files[0];

            this.previewImgs = this.fileData.map((file) => {
                return this.createImage(file.type, file)
            });
        },
        determineFileType: function(fileType, name) {
            return fileType.startsWith(name);
        },
        createImage : function(fileType, fileObject) {
            if (this.determineFileType(fileType, 'image/')) {
                return URL.createObjectURL(fileObject);
            } else if (this.determineFileType(fileType, 'text/')){
                return require("../../assets/textFile.svg");
            } else if (this.determineFileType(fileType, 'application/pdf')){
                return require("../../assets/PDFFile.svg");
            } else {
                return require("../../assets/logo.png");
            }
        },
        closeChatModal: function () {
            this.$emit('parentClick');
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
.flame {
    width: 400px;
    height: 500px;
    border-radius: 10px;
    box-shadow: 1px 2px 10px 3px rgb(155, 155, 155);
    bottom: 64px;
    right: 64px;
}

.chats {
    height: 390px;
    overflow: scroll;
}

.messages {
    display: flex;
    align-items: center;
    height: auto;
    background-color: #fff;
    position: absolute;
    bottom: 0px;
    width: 400px;
    border-radius: 0 0 10px 10px;
    flex-wrap: wrap;
}

.preview {
    padding-top: 8px;
    margin-left: 8px;
    font-size: 12px;
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
    width: 360px;
    height: 2px;
    background: #ebebeb;
    display: inline-block;
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
}

</style>