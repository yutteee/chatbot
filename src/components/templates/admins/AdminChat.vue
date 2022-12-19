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
    width: 67%;
    position: relative;
    border-left: 1px solid #000;
}
</style>