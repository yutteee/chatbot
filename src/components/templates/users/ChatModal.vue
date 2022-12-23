<template>
    <div class="flame">
        <ChatHeader @childClick="closeChatModal"></ChatHeader>
        <div class="chat-view">
            <ChatScreen></ChatScreen>
        </div>
    </div>
</template>

<script>
import ChatScreen from '../ChatScreen.vue';
import ChatHeader from '../../parts/users/ChatHeader.vue';

export default {
    components: {
        ChatScreen,
        ChatHeader
    },
    methods: {
        closeChatModal: function () {
            this.$emit('parentClick');
        },
    }
}
</script>

<style scoped>
.flame {
    width: 400px;
    height: 500px;
    border-radius: 10px;
    box-shadow: 1px 2px 10px 3px rgb(155, 155, 155);
}

.chat-view {
    height: calc(100% - 40px);
}
</style>