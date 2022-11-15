<template>
    <div class="container">
        <div class="title">Login</div>
        <div class="forms">
            <NameForm
                :model-value="name" 
                @update:model-value="name = $event" 
            ></NameForm>
            <PasswordForm
                :model-value="password" 
                @update:model-value="password = $event" 
            ></PasswordForm>
        </div>
        <LoginButton v-on:click="submit"></LoginButton>
    </div>
</template>

<script>
import LoginButton from '../parts/LoginButton.vue';
import NameForm from '../parts/NameForm.vue';
import PasswordForm from '../parts/PasswordForm.vue';

export default {
    components: {
        LoginButton,
        NameForm,
        PasswordForm
    },
    data () {
        return {
            name: "",
            password: ""
        }
    },
    methods: {
        submit: function() {
            this.$store.commit('login', {name: this.name, id :this.password})
            this.$router.push('/users')
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

.title {
    color: #0075FF;
    font-size: 48px;
    font-weight: 700;
}

</style>