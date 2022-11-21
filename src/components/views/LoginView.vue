<template>
<MyHeader></MyHeader>
<LoginModal></LoginModal>
</template>

<script>
import LoginModal from '../templates/LoginModal.vue';
import MyHeader from '../templates/MyHeader.vue'
export default {
    components: {
        LoginModal,
        MyHeader
    },
}
</script>