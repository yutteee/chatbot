<template>
    <div class="flame">
        <ChatHeader></ChatHeader>
        <div class="chats"></div>
        <div class="messages">
            <font-awesome-icon icon="fa-solid fa-link" class="icon"/>
            <MessageForm></MessageForm>
            <font-awesome-icon icon="fa-regular fa-paper-plane" class="icon plane"/>
        </div>
    </div>
</template>

<script>
import ChatHeader from '../parts/users/ChatHeader.vue';
import MessageForm from '../parts/users/MessageForm.vue'

export default {
    components: {
        ChatHeader,
        MessageForm
    }
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

.icon {
    width: 25px;
    height: 25px;
}

.plane {
    color: #0075FF;
}
</style>