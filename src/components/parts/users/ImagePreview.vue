<template>
    <div class="preview">
        <img v-bind:src="previewUrl" class="preview-img">
        <button class="delete-button" @click="$emit('deletePreview')">
            <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
        </button>
    </div>
    <div class="preview-name">{{previewName}}</div>
</template>

<script>
export default {
    emits:['deletePreview'],
    props: {
        previewUrl: String,
        previewName: String
    }
}

</script>

<style scoped>
.preview {
    position: relative;
    width: auto;
    display: inline-block;
}

.preview-name {
    font-size: 10px;
    color: #636363;
    max-width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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