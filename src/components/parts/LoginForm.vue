<template>
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<script>
export default {
    props:['modelValue'],
    emits:['update:modelValue']
}

</script>

<style scoped>
input {
    outline: none;
    width: 100%;
    height: 24px;
    border: 1px solid #000;
    border-radius: 3px;
}

input:focus {
    border: 1px solid #000;
    background-color: #c9e9f1;
}
</style>