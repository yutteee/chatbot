<template>
    <font-awesome-icon
        icon="fa-regular fa-paper-plane"
        v-on:click="$emit('handleClick')"
        class="icon"/>
</template>

<script>
export default {
    emits:['handleClick'],
}
</script>

<style scoped>
.icon {
    width: 25px;
    height: 25px;
    color: #0075FF;
}
</style>