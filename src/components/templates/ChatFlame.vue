<template>
    <div class="flame">
        <ChatHeader></ChatHeader>
        <MessageForm></MessageForm>
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

</style>