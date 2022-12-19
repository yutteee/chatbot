<template>
    <MyHeader></MyHeader>
    <!-- chatModalに変更する -->
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
            roomID: "room"
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
}
</style>