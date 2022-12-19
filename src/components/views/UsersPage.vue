<template>
    <MyHeader></MyHeader>
    <!-- chatModalに変更する -->
    <ChatFlame v-if="isModalOpen" class="chatModal" @parentClick="closeChatModal"></ChatFlame>
    <FloatingActionButton @click="buttonClicked" v-show="!isModalOpen"></FloatingActionButton>
</template>

<script>
import FloatingActionButton from '../parts/FloatingActionButton.vue';
import ChatFlame from '../templates/ChatScreen.vue';
import MyHeader from '../templates/MyHeader.vue'

export default {
    components: {
        FloatingActionButton,
        ChatFlame,
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