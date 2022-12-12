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
            <!-- 音声を再生 -->
            <div v-else-if="determineFileType(fileType, 'audio/')">
                <span class="file-name">{{fileType}}</span>
                <div
                    @click="playMusic"
                    class="file-text"
                ><font-awesome-icon icon="fa-solid fa-play" class="music-icon" v-if="!isMusicPlaying"/>
                <font-awesome-icon icon="fa-solid fa-stop" class="music-icon" v-if="isMusicPlaying"/>
                {{fileName}}
                </div>
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
    data() {
        return {
            isMusicPlaying: false,
            selectingMusic: HTMLAudioElement
        }
    }, 
    methods: {
        determineFileType: function(fileType, name) {
            return fileType.startsWith(name);
        },
        openFile: function(url) {
            window.open(url)
        },
        playMusic: function () {
            if(this.isMusicPlaying === false){
                this.selectingMusic = new Audio(this.fileURL);
                this.isMusicPlaying = true;
                this.selectingMusic.play();
            } else {
                this.isMusicPlaying = false;
                this.selectingMusic.pause();
            }
        }
    },
}
</script>

<style scoped>
.message {
    position: relative;
}

.sendedImg {
    max-width: 280px;
    box-shadow: 4px 2px 2px rgb(133, 133, 133);
    display: block;
}

.file {
    width: fit-content;
    max-width: 280px;
    margin:32px 40px 5px auto;
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
    border: 1.5px solid #288BFF;
    color: #288BFF;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 2px 10px;
    box-shadow: 4px 2px 2px rgb(133, 133, 133);
}

.icon {
    color: #525F7F;
    width: 26px;
    height: 26px;
    padding: 5px;
}

.music-icon {
    color: #525F7F;
    width: 20px;
    height: 20px;
    padding: 5px;
}

.text {
    border: 1.5px solid #288BFF;
    color: #288BFF;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 2px 10px;
    box-shadow: 4px 2px 2px rgb(133, 133, 133);
    width: fit-content;
    max-width: 280px;
    margin:32px 40px 5px auto;
    word-wrap: break-word;
}

.profile {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: absolute;
    top: -20px;
    right: 0px;
}
</style>