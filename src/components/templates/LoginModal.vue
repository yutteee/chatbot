<template>
    <div class="container">
        <div class="title">Login</div>
        <div class="forms">
            <div class="form">
                <div class="label">name</div>
                <LoginForm
                    :model-value="name" 
                    @update:model-value="name = $event" 
                ></LoginForm>
            </div>
            <div class="form">
                <div class="label">password</div>
                <LoginForm
                    :model-value="password" 
                    @update:model-value="password = $event" 
                ></LoginForm>
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
    },
    data () {
        return {
            name: "",
            password: ""
        }
    }
}
</script>

<style scoped>
.container {
    text-align: center;
    margin-top: 64px;
}

.forms {
    max-width: 400px;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 48px;
    text-align: left;
}

.label {
    font-size: 20px;
    margin-bottom: 8px;
}

.form {
    margin-top: 32px;
}
.title {
    color: #0075FF;
    font-size: 48px;
    font-weight: 700;
}

</style>