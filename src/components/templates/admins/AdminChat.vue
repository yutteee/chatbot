<template>
    <div class="chat">
        <ChatScreen></ChatScreen>
    </div>
</template>

<script>
import ChatScreen from '../ChatScreen.vue';

export default {
    components: {
        ChatScreen
    }
}
</script>

<style scoped>
.chat {
    width: 60%;
}
</style>