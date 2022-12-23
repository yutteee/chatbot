<template>
    <MyHeader></MyHeader>
    <AdminLoginModal></AdminLoginModal>
</template>

<script>
import AdminLoginModal from '../templates/admins/AdminLoginModal.vue';
import MyHeader from '../templates/MyHeader.vue'
export default {
    components: {
        AdminLoginModal,
        MyHeader
    },
}
</script>