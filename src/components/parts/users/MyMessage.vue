<template>
    <div class="message">
        <img v-if="message == ''" class="sendedImg" :src="fileTypeChange"/>
        <div class="text" v-else>
            {{ message }}
        </div>
        <img class="icon" src="../../../assets/logo.png">
    </div>
</template>

<script>
export default {
    props: {
        file: Object,
        message: String
    },
    computed: {
        fileTypeChange() {
            const imgblob = new Blob([this.file],{type:"image/jpeg"});
            return URL.createObjectURL(imgblob)
        }
    }
}
</script>

<style scoped>
.message {
    position: relative;
}

.sendedImg {
    max-width: 280px;
    box-shadow: 4px 2px 2px rgb(133, 133, 133);
    margin:32px 40px 5px auto;
    display: block;
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

.icon {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: absolute;
    top: -20px;
    right: 0px;
}
</style>