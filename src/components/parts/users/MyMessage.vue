<template>
    <div class="message">
        <div class="text" v-if="message == ''">{{file}}</div>
        <div class="text" v-else>
            {{ message }}
        </div>
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
    position: relative;
}

.text {
    border: 1.5px solid #288BFF;
    color: #288BFF;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: fit-content;
    max-width: 280px;
    padding: 2px 10px;
    box-shadow: 4px 2px 2px rgb(133, 133, 133);
    margin:32px 40px 5px auto;
    word-wrap: break-word;
}

img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: absolute;
    top: -20px;
    right: 0px;
}
</style>