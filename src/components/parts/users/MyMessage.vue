<template>
    <div class="message">
        How are you?
        <img src="../../../assets/logo.png">
    </div>
</template>

<style scoped>
.message {
    border: 1.5px solid #288BFF;
    color: #288BFF;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: fit-content;
    padding: 2px 10px;
    box-shadow: 4px 2px 2px rgb(133, 133, 133);
    position: relative;
    margin-right: 40px;
    margin-left: auto;
    margin-top: 32px;
}

img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: absolute;
    top: -20px;
    right: -40px;
}
</style>