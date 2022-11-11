<template>
    <div class="flame">
        <ChatHeader @childClick="closeChatModal"></ChatHeader>
        <div class="chats">
            <YourMessage></YourMessage>
            <MyMessage 
                v-for="sendedMessage in sendedMessages"
                :key="sendedMessage.id"
                :message="sendedMessage.content"
            ></MyMessage>
        </div>
        <div class="messages">
            <div class="preview" v-for="file in fileData" :key="file.name">{{file.name}}</div>
            <div class="forms">
                <FileUpload v-on:change="selectFile"></FileUpload> 
                <MessageForm :message="inputMessage" @update:message="inputMessage = $event"></MessageForm>
                <MessageSendButton v-on:click="sendMessage" :color="color"></MessageSendButton>
            </div>
        </div>
    </div>
</template>

<script>
import ChatHeader from '../parts/users/ChatHeader.vue';
import MessageForm from '../parts/users/MessageForm.vue';
import FileUpload from '../parts/users/FileUpload.vue'
import MessageSendButton from '../parts/users/MessageSendButton.vue'
import MyMessage from '../parts/users/MyMessage.vue';
import YourMessage from '../parts/users/YourMessage.vue';

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
            fileData: [],
            inputMessage: '',
            // 本当はデータベースから持ってくる。
            sendedMessages: [
                {
                    id: 0,
                    content: "Hi!"
                },
                {
                    id: 1,
                    content: "How are you?"
                },
            ],
            color: '#636363',
            // aaa: ''
        }
    },
    methods: {
        sendMessage : function() {
            const spaceDeletedMessage = this.inputMessage.replace(/\s+/g, '');
            if (spaceDeletedMessage == '') return console.log('error');

            const endIndex = this.sendedMessages.length;
            const sendedMessage = {
                id: endIndex,
                content: this.inputMessage
            };
            this.sendedMessages[endIndex] = sendedMessage;
            this.inputMessage = '';
        },
        selectFile : function(event) {
            // const fileReader = new FileReader();
            // fileReader.onload(function() {
            //     this.aaa = fileReader.result;
            // })
            const endIndex = this.fileData.length
            
            this.fileData[endIndex] = event.target.files[0];
            console.log(this.fileData);

            // fileReader.readAsDataURL(this.fileData);
        },
        closeChatModal: function () {
            this.$emit('parentClick');
        }
    },
    updated() {
        const spaceDeletedMessage = this.inputMessage.replace(/\s+/g, '');
        if (spaceDeletedMessage == '' && this.fileData.length == 0) {
            this.color = '#636363';
            console.log(this.fileData.length)
        } else {
            this.color = '#0075ff';
        }
    }
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