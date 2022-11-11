<template>
    <div class="flame">
        <ChatHeader></ChatHeader>
        <div class="chats">
            <MyMessage 
                v-for="sendedMessage in sendedMessages"
                :key="sendedMessage.id"
                :message="sendedMessage.content"
            ></MyMessage>
        </div>
        <div class="messages">
            <FileUpload v-on:change="selectFile"></FileUpload> 
            <MessageForm :message="inputMessage" @update:message="inputMessage = $event"></MessageForm>
            <MessageSendButton v-on:click="sendMessage"></MessageSendButton>
        </div>
    </div>
</template>

<script>
import ChatHeader from '../parts/users/ChatHeader.vue';
import MessageForm from '../parts/users/MessageForm.vue';
import FileUpload from '../parts/users/FileUpload.vue'
import MessageSendButton from '../parts/users/MessageSendButton.vue'
import MyMessage from '../parts/users/MyMessage.vue';

export default {
    components: {
        ChatHeader,
        MessageForm,
        FileUpload,
        MessageSendButton,
        MyMessage
    },
    data () {
        return {
            fileData: '',
            inputMessage: '',
            sendedMessages: [
                {
                    id: 0,
                    content: "Hi!"
                },
                {
                    id: 1,
                    content: "How are you?"
                },
            ]
        }
    },
    methods: {
        sendMessage : function() {
            const spaceDeletedMessage = this.inputMessage.replace(/\s+/g, '');
            if (spaceDeletedMessage == '') return console.log("error");
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
}

</script>

<style scoped>
.flame {
    width: 400px;
    height: 500px;
    border: 1px solid;
    position: relative;
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