<template>
    <div class="flame">
        <ChatHeader @childClick="closeChatModal"></ChatHeader>
        <div class="chats" ref="myModal">
            <div v-for="message in messages" :key="message.text">
                <YourMessage
                    v-if="message.name !== $store.state.user_name"
                    :message="message.text"
                    :file="message.file"
                ></YourMessage>
                <MyMessage 
                    v-else
                    :message="message.text"
                    :file="message.file"
                ></MyMessage>
            </div>
        </div>
        <div class="messages">
            <!-- <div class="preview" v-for="preview in previewImgs" :key="preview.lastModified"> -->
                <img v-bind:src="previewImg" class="preview-img">
            <!-- </div> -->
            <div class="forms">
                <FileUpload v-on:change="selectFile"></FileUpload> 
                <MessageForm :message="inputMessage" @update:message="inputMessage = $event"></MessageForm>
                <MessageSendButton v-on:click="sendMessage" :color="sendButtonColor"></MessageSendButton>
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
// import axios from 'axios'


export default {
    components: {
        ChatHeader,
        MessageForm,
        FileUpload,
        MessageSendButton,
        MyMessage,
        YourMessage
    },
    data () {
        return {
            roomID: 'room',
            fileData: [],
            inputMessage: '',
            messages: [],
            sendButtonColor: '#636363',
            previewImg: '',
        }
    },
    created() {
        SocketioService.setupSocketConnection();
        SocketioService.createRoom(this.$store.state.user_name, this.roomID)
    },
    mounted() {
        SocketioService.getMessage((err, latestMessages) => {
            this.messages = latestMessages;
            console.log(latestMessages);
            this.scrollToEnd();
        });
    },
    methods: {
        sendMessage : function() {
            const message = this.inputMessage;
            const spaceDeletedMessage = message.replace(/\s+/g, '');
            if (spaceDeletedMessage == '' && this.fileData.length == 0) return console.log('error');

            // const formData = new FormData();
            // formData.append('file', this.fileData);
            // axios.post('/file', formData)
            //     .then(function(response){
            //         console.log('ok!!')
            //         console.log(response);
            //     })
            //     .catch(function(err){
            //         console.log("error!!")
            //         console.log(err);
            //     });

            SocketioService.sendMessage(message, this.fileData);
            console.log(this.fileData);
            this.inputMessage = '';
            this.fileData = [];
            this.sendButtonColor = '#636363';
        },
        selectFile : function(event) {
            const endIndex = this.fileData.length
            this.fileData[endIndex] = event.target.files[0];

            const fileReader = new FileReader();

            fileReader.onload = function(e) {
                const imageUrl = e.target.result;
                // this.previewImgs.push(imageUrl);
                this.previewImg = imageUrl;
                console.log(this.previewImg);
            };
            console.log(this.previewImg);

            fileReader.readAsDataURL(this.fileData[0]);
            this.sendButtonColor = '#0075ff';
        },
        closeChatModal: function () {
            this.$emit('parentClick');
        },
        scrollToEnd() {
            this.$nextTick(() => {
                this.$refs['myModal'].scrollTo(0, this.$refs['myModal'].scrollHeight + 1000)
            })
        }
    },
    watch: {
        inputMessage : function() {
            const spaceDeletedMessage = this.inputMessage.replace(/\s+/g, '');
            if (spaceDeletedMessage == '' && this.fileData.length == 0) {
                this.sendButtonColor = '#636363';
            } else {
                this.sendButtonColor = '#0075ff';
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
    position: relative;
    position: fixed;
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
    position: absolute;
    background-color: #fff;
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

.preview-img {
    width: 100px;
    height: 60px;
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