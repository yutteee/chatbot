<template>
    <div class="preview">
        <div v-if="determineFileType(previewType, 'image/')">
            <img v-bind:src="previewURL" class="preview-img">
        </div>
        <div v-else-if="determineFileType(previewType, 'audio/')">
            <div
                @click="playMusic"
                class="file-text"
                ><font-awesome-icon icon="fa-solid fa-play" class="music-icon" v-if="!isMusicPlaying"/>
                <font-awesome-icon icon="fa-solid fa-stop" class="music-icon" v-if="isMusicPlaying"/>
                {{previewName}}
                </div>
        </div>
        <div v-else-if="determineFileType(previewType, 'video/')">
            <video :src="fileURL" class="video" controls>
            </video>
        </div>
        <div v-else-if="determineFileType(previewType, 'text/')">
            <div class="file-text">
                <font-awesome-icon icon="fa-regular fa-file-lines" class="icon"/>
                {{previewName}}
            </div>
        </div>
        <div v-else-if="determineFileType(previewType, 'application/pdf')">
            <div class="file-text">
                <font-awesome-icon icon="fa-regular fa-file-pdf" class="icon"/>
                {{previewName}}
            </div>
        </div>
        <div v-else>
            <div class="file-text">
                <font-awesome-icon icon="fa-regular fa-file" class="icon"/>
                {{previewName}}
            </div>
        </div>
        <button class="delete-button" @click="$emit('deletePreview')">
            <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
        </button>
    </div>
</template>

<script>
export default {
    emits:['deletePreview'],
    props: {
        previewURL: String,
        previewName: String,
        previewType: String
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
                this.selectingMusic = new Audio(this.previewURL);
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
.preview {
    position: relative;
    width: auto;
    display: inline-block;
}

.preview-img {
    max-width: 100px;
    max-height: 60px;
}

.delete-button {
    position: absolute;
    top: -6px;
    right: -8px;
    background: #000;
    color: #fff;
    border-radius: 50%;
    border: none;
}
</style>