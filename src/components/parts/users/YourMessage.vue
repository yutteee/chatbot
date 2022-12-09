<template>
    <div class="message">
        <div class="file" v-if="message == ''">
            <div v-if="determineFileType(fileType, 'image/')">
                <span class="file-name">{{fileName}}</span>
                <img
                    class="sendedImg"
                    :src="fileURL"
                />
            </div>
            <div v-else-if="determineFileType(fileType, 'text/')">
                <span class="file-name">{{fileType}}</span>
                <div
                    @click="openFile(fileURL)"
                    class="file-text"
                ><font-awesome-icon icon="fa-regular fa-file-lines" class="icon"/>
                {{fileName}}
                </div>
            </div>
            <div v-else-if="determineFileType(fileType, 'application/pdf')">
                <span class="file-name">{{fileType}}</span>
                <div
                    @click="openFile(fileURL)"
                    class="file-text"
                ><font-awesome-icon icon="fa-regular fa-file-pdf" class="icon"/>
                {{fileName}}
                </div>
            </div>
            <div v-else>
                <span class="file-name">{{fileType}}</span>
                <div 
                    class="file-text"
                    @click="openFile(fileURL)"
                >{{fileName}}
                </div>
            </div>
        </div>
        <div class="text" v-else>{{message}}</div>
        <img class="profile" src="../../../assets/logo.png">
    </div>
</template>

<script>

export default {
    props: {
        fileURL: String,
        message: String,
        fileType: String,
        fileName: String,
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

.sendedImg {
    max-width: 280px;
    box-shadow: 4px 2px 2px rgb(133, 133, 133);
    display: block;
}

.icon {
    color: #525F7F;
    width: 26px;
    height: 26px;
    padding: 5px;
}

.file-name {
    color: #636363;
    font-size: 12px;
    position: absolute;
    top: -18px;
}

.file-text {
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #F5F5F5;
    color: #636363;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 2px 10px;
}

.file {
    width: fit-content;
    max-width: 280px;
    margin:32px auto 5px 40px;
}

.profile {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: absolute;
    top: -20px;
}
</style>