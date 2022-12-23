<template>
    <MyHeader :isLogin="true"></MyHeader>
    <ChatModal v-if="isModalOpen" class="chatModal" @parentClick="closeChatModal"></ChatModal>
    <FloatingActionButton @click="buttonClicked" v-show="!isModalOpen"></FloatingActionButton>
</template>

<script>
import FloatingActionButton from '../parts/FloatingActionButton.vue';
import ChatModal from '../templates/users/ChatModal.vue';
import MyHeader from '../templates/MyHeader.vue'

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