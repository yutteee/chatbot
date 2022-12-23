<template>
    <MyHeader :isLogin="true"></MyHeader>
    <div class="admin">
        <UserDetail
            :userName="user.name"
            :userId="user.id"
            :userImage="user.image"
            :userBirthday="user.birthday"
            class="user-info"
        ></UserDetail>
        <div class="user-chat">
            <AdminChat></AdminChat>
        </div>
    </div>
</template>

<script>
import UserDetail from '../parts/admins/UserDetail.vue';
import MyHeader from '../templates/MyHeader.vue';
import AdminChat from '../templates/admins/AdminChat.vue';

export default {
    components: {
        UserDetail,
        MyHeader,
        AdminChat
    },
    data() {
        return {
            user: {}
        }
    },
    created () {
        const strId = this.$route.params.id;
        const intId = Number(strId);
        const searchedUser = this.$store.state.users.find(({ id }) => id === intId);
        this.user = searchedUser;
    }
}
</script>

<style scoped>
.admin {
    display: flex;
}
.user-info {
    width: 33%;
}

.user-chat {
    width: 67%;
    border-left: 2px solid #ebebeb;
}
</style>