<template>
    <img v-if="previewUrl !== null" v-bind:src="previewUrl" class="preview-img">
    <img v-else src="../../../assets/logo.png" class="preview-img">
    <button @click="$emit('deletePreview')">a</button>
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
.preview-img {
    max-width: 100px;
    max-height: 60px;
}
</style>