<template>
    <MyHeader :isLogin="true"></MyHeader>
    <ChatModal v-if="isModalOpen" class="chatModal" @parentClick="closeChatModal"></ChatModal>
    <FloatingActionButton @click="buttonClicked" v-show="!isModalOpen"></FloatingActionButton>
</template>

<script>
import FloatingActionButton from '../parts/FloatingActionButton.vue';
import ChatModal from '../templates/users/ChatModal.vue';
import MyHeader from '../templates/MyHeader.vue'
import SocketioService from '@/services/socketio.service';

export default {
    components: {
        FloatingActionButton,
        ChatModal,
        MyHeader
    },
    data () {
        return {
            isModalOpen: false,
        }
    },
    methods: {
        buttonClicked: function () {
            this.isModalOpen = true;
            SocketioService.setupSocketConnection();
            SocketioService.createRoom(
                this.$store.state.user_name, 
                this.$store.state.user_id, 
                this.$store.state.roomID
            );
        },
        closeChatModal: function () {
            this.isModalOpen = false;
        }
    }
}
</script>

<style scoped>
.chatModal {
    position: absolute;
    bottom: 64px;
    right: 64px;
}
</style>