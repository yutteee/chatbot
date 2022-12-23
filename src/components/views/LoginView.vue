<template>
<MyHeader :isLogin="false"></MyHeader>
<LoginModal></LoginModal>
</template>

<script>
import LoginModal from '../templates/login/LoginModal.vue';
import MyHeader from '../templates/MyHeader.vue'
export default {
    components: {
        LoginModal,
        MyHeader
    },
}
</script>