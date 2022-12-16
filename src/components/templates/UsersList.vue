<template>
    <div class="title">Users</div>
    <div class="users-list">
        <UserListHeader></UserListHeader>
        <UserRow 
            v-for="user in users" 
            :key="user.id"
            :userId="user.id"
            :userName="user.name"
            :userImage="user.image"
            :userBirthDay="user.birthday"
        ></UserRow>
    </div>
</template>

<script>
import UserListHeader from '../parts/admins/UserListHeader.vue'
import UserRow from '../parts/admins/UserRow.vue'

export default {
    components :{
        UserListHeader,
        UserRow
    },
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: "yusaku",
                    image: "logo",
                    birthday: "2002/07/12"
                },
                {
                    id: 2,
                    name: "nakamura",
                    image: "logo",
                    birthday: "2000/02/11"
                },
            ]
        }
    }
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