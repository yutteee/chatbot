<template>
    <ChatFlame v-show="isModalOpen" class="chatModal"></ChatFlame>
    <FloatingActionButton @click="buttonClicked" v-show="!isModalOpen"></FloatingActionButton>
</template>

<script>
import FloatingActionButton from '../parts/FloatingActionButton.vue';
import ChatFlame from '../templates/ChatFlame.vue';

export default {
    components: {
        FloatingActionButton,
        ChatFlame
    },
    data () {
        return {
            isModalOpen: false
        }
    },
    methods: {
        buttonClicked: function () {
            this.isModalOpen = true;
        }
    }
}
</script>

<style scoped>
.chatModal {
    position: absolute;
}
</style>