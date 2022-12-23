<template>
    <div class="chat-frame">
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
.chat-frame {
    width: 90%;
    height: calc(100vh - 64px);
    position: relative;
    margin: 0 auto;
}
</style>