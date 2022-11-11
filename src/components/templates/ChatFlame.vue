<template>
    <div class="flame">
        <ChatHeader></ChatHeader>
        <div class="chats">
            <YourMessage></YourMessage>
            <MyMessage 
                v-for="sendedMessage in sendedMessages"
                :key="sendedMessage.id"
                :message="sendedMessage.content"
            ></MyMessage>
        </div>
        <div class="messages">
            <FileUpload v-on:change="selectFile"></FileUpload> 
            <MessageForm :message="inputMessage" @update:message="inputMessage = $event"></MessageForm>
            <MessageSendButton v-on:click="sendMessage" :color="color"></MessageSendButton>
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
            fileData: '',
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
            color: '#636363'
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
            this.fileData = event.target.files[0];
            console.log(this.fileData);
        }
    },
    updated() {
        const spaceDeletedMessage = this.inputMessage.replace(/\s+/g, '');
        if (spaceDeletedMessage == '') {
            this.color = '#636363';
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
    border: 1px solid;
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
    justify-content: space-evenly;
    align-items: center;
    height: 64px;
    position: absolute;
    background-color: #fff;
    bottom: 0px;
    width: 400px;
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