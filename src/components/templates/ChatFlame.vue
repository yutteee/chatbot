<template>
    <div class="flame">
        <ChatHeader></ChatHeader>
        <font-awesome-icon icon="fa-solid fa-link" class="icon"/>
        <MessageForm></MessageForm>
        <font-awesome-icon icon="fa-regular fa-paper-plane" class="icon plane"/>
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

.icon {
    width: 25px;
    height: 25px;
}

.plane {
    color: #0075FF;
}
</style>