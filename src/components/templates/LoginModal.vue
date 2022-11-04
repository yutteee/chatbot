<template>
    <div class="container">
        <div class="title">Login</div>
        <div class="forms">
            <div class="form">
                <div>name</div>
                <LoginForm></LoginForm>
            </div>
            <div class="form">
                <div>password</div>
                <LoginForm></LoginForm>
            </div>
        </div>
        <LoginButton></LoginButton>
    </div>
</template>

<script>
import LoginButton from '../parts/LoginButton.vue';
import LoginForm from '../parts/LoginForm.vue';

export default {
    components: {
        LoginButton,
        LoginForm
    }
}
</script>

<style scoped>
.container {
    text-align: center;
}

.forms {
    width: 30%;
    margin: 0 auto;
    margin-bottom: 48px;
    text-align: left;
}

.form {
    margin-top: 32px;
}
.title {
    color: #0075FF;
    font-size: 48px;
}

</style>