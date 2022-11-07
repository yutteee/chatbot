<template>
    <div class="flame">
        <ChatHeader></ChatHeader>
    </div>
</template>

<script>
import ChatHeader from '../parts/users/ChatHeader.vue';

export default {
    components: {
        ChatHeader
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