<template>
    <div class="form">
        <div class="label">name</div>
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    props:{
        modelValue: String
    },
    emits:['update:modelValue']
}

</script>

<style scoped>
.form {
    margin-top: 32px;
}

.label {
    font-size: 20px;
    margin-bottom: 8px;
}

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