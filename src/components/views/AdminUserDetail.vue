<template>
    <UserDetail
        :userName="user.name"
        :userId="user.id"
        :userImage="user.image"
        :userBirthday="user.birthday"
        class="user-info"
    ></UserDetail>
</template>

<script>
import UserDetail from '../parts/admins/UserDetail.vue';
export default {
    components: {
        UserDetail
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
.user-info {
    width: 33%;
}
</style>