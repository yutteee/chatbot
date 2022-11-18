<template>
    <input 
        type="text"
        placeholder="Write a message."
        :value="message"
        @input="$emit('update:message', $event.target.value)"
    >
</template>

<script>
export default {
    props: {
        message: String
    }
}
</script>


<style scoped>
input {
    height: 32px;
    width: 300px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 30px;
    border: 1px solid #000;
    outline: none;
}
</style>