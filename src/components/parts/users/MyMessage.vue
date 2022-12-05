<template>
    <div class="message">
        <!-- ファイルの名前も表示するようにする -->
        <img v-if="message == ''" class="sendedImg" :src="fileTypeChange" @click="fileClick"/>
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
        message: String,
        fileType: String
    },
    methods: {
        fileClick() {
            const determineFileType = (typeName) =>  this.fileType.startsWith(typeName);
            if (determineFileType('image/')) {
                // 写真を拡大して表示するようにする
                console.log("image");
            } else if (determineFileType('text/')) {
                const textFile = new Blob([this.file],{type:this.fileType});
                const textFileUrl = URL.createObjectURL(textFile);
                window.open(textFileUrl);
            } else if (determineFileType('application/')) {
                const textFile = new Blob([this.file],{type:this.fileType});
                const textFileUrl = URL.createObjectURL(textFile);
                window.open(textFileUrl);
            }
        }
    },
    computed: {
        fileTypeChange() {
            const determineFileType = (typeName) =>  this.fileType.startsWith(typeName);
            if (determineFileType('image/')) {
                const imgblob = new Blob([this.file],{type:this.fileType});
                return URL.createObjectURL(imgblob);
            } else if (determineFileType('text/')){
                return require("../../../assets/textFile.svg");
            } else if (determineFileType('application/pdf')){
                return require("../../../assets/PDFFile.svg");
            } else {
                return require("../../../assets/logo.png");
            }
        },
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