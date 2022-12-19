<template>
    <div class="title">Users</div>
    <div class="users-list">
        <UserListHeader></UserListHeader>
        <UserRow 
            v-for="user in this.$store.state.users" 
            :key="user.id"
            :userId="user.id"
            :userName="user.name"
            :userImage="user.image"
            :userBirthDay="user.birthday"
        ></UserRow>
    </div>
</template>

<script>
import UserListHeader from '../../parts/admins/UserListHeader.vue'
import UserRow from '../../parts/admins/UserRow.vue'

export default {
    components :{
        UserListHeader,
        UserRow
    },
}
</script>

<style scoped>
.title {
    font-size: 32px;
    padding: 10px 40px;
}

.users-list {
    width: 90%;
    margin: 0 auto;
}
</style>