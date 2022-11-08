<template>
    <div class="flame">
        <ChatHeader></ChatHeader>
        <div class="chats">
            <div>{{this.fileData.value}}</div>
        </div>
        <div class="messages">
            <FileUpload v-on:change="selectFile"></FileUpload> 
            <MessageForm></MessageForm>
            <MessageSendButton v-on:click="sendMessage"></MessageSendButton>
        </div>
    </div>
</template>

<script>
import ChatHeader from '../parts/users/ChatHeader.vue';
import MessageForm from '../parts/users/MessageForm.vue';
import FileUpload from '../parts/users/FileUpload.vue'
import MessageSendButton from '../parts/users/MessageSendButton.vue'

export default {
    components: {
        ChatHeader,
        MessageForm,
        FileUpload,
        MessageSendButton
    },
    data () {
        return {
            fileData: ''
        }
    },
    methods: {
        sendMessage : function() {
            console.log('aaa')
        },
        selectFile : function(event) {
            this.fileData = event.target.files[0]
            console.log(this.fileData)
        }
    },
}

</script>

<style scoped>
.flame {
    width: 400px;
    height: 500px;
    border: 1px solid;
}

.chats {
    height: 396px;
}

.messages {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 64px;
    position: relative;
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