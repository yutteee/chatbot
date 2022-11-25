<template>
    <div>{{file}}</div>
    <div class="message">
        {{ message }}
        <img src="../../../assets/logo.png">
    </div>
</template>

<script>
export default {
    props: {
        file: String,
        message: String
    }
}
</script>

<style scoped>
.message {
    border: 1.5px solid #288BFF;
    color: #288BFF;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: fit-content;
    max-width: 280px;
    padding: 2px 10px;
    box-shadow: 4px 2px 2px rgb(133, 133, 133);
    position: relative;
    margin:32px 40px 5px auto;
    word-wrap: break-word;
}

img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: absolute;
    top: -20px;
    right: -40px;
}
</style>