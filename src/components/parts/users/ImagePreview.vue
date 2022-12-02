<template>
    <div class="preview">
        <img v-if="previewUrl !== null" v-bind:src="previewUrl" class="preview-img">
        <img v-else src="../../../assets/logo.png" class="preview-img">
        <button class="delete-button" @click="$emit('deletePreview')">
            <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon>
        </button>
    </div>
</template>

<script>
export default {
    emits:['deletePreview'],
    props: {
        previewUrl: String,
    }
}

</script>

<style scoped>
.preview {
    position: relative;
}
.preview-img {
    max-width: 100px;
    max-height: 60px;
}

.delete-button {
    position: absolute;
    top: 0;
    right: -8px;
    background: #000;
    color: #fff;
    border-radius: 50%;
    border: none;
}
</style>