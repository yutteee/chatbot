<template>
    <button class="float">
        <font-awesome-icon icon="fa-regular fa-comment-dots" class="icon"/>
    </button>
</template>

<script>

export default {
    
}
</script>

<style scoped>
.float {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #525F7F;
    border: 0;
    box-shadow: 4px 3px 2px rgb(149, 149, 149);
    cursor: pointer;
    position: fixed;
    bottom: 64px;
    right: 64px;
}

.icon {
    width: 48px;
    height: 48px;
    color: #fff;
}
</style>
