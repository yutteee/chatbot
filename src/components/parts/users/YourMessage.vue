<template>
    <div class="message">
        <div class="file" v-if="message == ''">
            <img 
                v-if="determineFileType(fileType, 'image/')"
                class="sendedImg"
                :src="fileURL"
            />
            <div 
                v-else-if="determineFileType(fileType, 'text/')"
                class="text"
                @click="openFile(fileURL)"
            >text file
            </div>
            <div 
                v-else-if="determineFileType(fileType, 'application/pdf')"
                class="text"
                @click="openFile(fileURL)"
            >PDF file
            </div>
            <div 
                v-else
                class="text"
                @click="openFile(fileURL)"
            >other
            </div>
        </div>
        <div class="text" v-else>{{message}}</div>
        <img src="../../../assets/logo.png">
    </div>
</template>

<script>

export default {
    props: {
        fileURL: String,
        message: String,
        fileType: String,
    },
    methods: {
        determineFileType: function(fileType, name) {
            return fileType.startsWith(name);
        },
        openFile: function(url) {
            window.open(url)
        }
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