<template>
    <div class="title">Login</div>
    <LoginButton></LoginButton>
</template>

<script>
import LoginButton from '../parts/LoginButton.vue';

export default {
    components: {
        LoginButton
    }
}
</script>

<style scoped>
.title {
    color: #0075FF;
    font-size: 48px;
    
}

</style>