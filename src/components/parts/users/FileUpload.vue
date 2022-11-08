<template>
    <label>
        <font-awesome-icon
            icon="fa-solid fa-link"
            class="icon"/>
        <input type="file" v-on:change="selectFile">
    </label>
    
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
}

input {
  display: none;
}
</style>