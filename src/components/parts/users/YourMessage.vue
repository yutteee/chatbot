<template>
    <div class="message">
        {{message}}
        <img src="../../../assets/logo.png">
    </div>
</template>

<script>
export default {
    props: {
        message: String
    }
}
</script>

<style scoped>
.message {
    background-color: #F5F5F5;
    color: #636363;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: fit-content;
    max-width: 280px;
    padding: 2px 10px;
    position: relative;
    margin:32px auto 5px 40px;
    word-wrap: break-word;
}

img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: absolute;
    top: -20px;
    left: -38px;
}
</style>