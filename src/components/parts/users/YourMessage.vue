<template>
    <div class="message">
        <div class="file" v-if="message == ''">
            <img class="sendedImg" :src="fileUrl" @click="fileClick"/>
        </div>
        <div class="text" v-else>{{message}}</div>
        <img src="../../../assets/logo.png">
    </div>
</template>

<script>

export default {
    props: {
        fileUrl: String,
        message: String
    }
}
</script>

<style scoped>
.message {
    position: relative;
}
.text {
    background-color: #F5F5F5;
    color: #636363;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: fit-content;
    max-width: 280px;
    padding: 2px 10px;
    margin:32px auto 5px 40px;
    word-wrap: break-word;
}

.file {
    background-color: #F5F5F5;
    color: #636363;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: fit-content;
    max-width: 280px;
    padding: 2px 10px;
    margin:32px auto 5px 40px;
    word-wrap: break-word;
}

img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: absolute;
    top: -20px;
}
</style>