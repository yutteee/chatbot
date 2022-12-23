<template>
    <div class="container">
        <div class="title">
            Login
            <span class="subtitle">for admin</span>
        </div>
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
import LoginButton from '../../parts/LoginButton.vue';
import NameForm from '../../parts/NameForm.vue';
import PasswordForm from '../../parts/PasswordForm.vue';

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
        submit: async function() {
            const admin = {name: this.name, id :this.password}
            await this.$store.dispatch('adminLogin', admin)
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
    position: relative;
    display: inline;
}

.subtitle {
    font-size: 24px;
    font-weight: 400;
    position: absolute;
    bottom: 0;
    right: -140px;
}

</style>