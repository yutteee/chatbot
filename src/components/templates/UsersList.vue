<template>
    <UserRow 
        v-for="user in users" 
        :key="user.id"
        :userId="user.id"
        :userName="user.name"
        :userImg="user.img"
        :userBirthDay="user.birthday"
    ></UserRow>
</template>

<script>
import UserRow from '../parts/admins/UserRow.vue'

export default {
    components :{
        UserRow
    },
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: "yusaku",
                    image: "logo.png",
                    birthday: Date(2002, 6, 12)
                },
                {
                    id: 2,
                    name: "nakamura",
                    image: "logo.png",
                    birthday: Date(2000, 6, 2)
                },
            ]
        }
    }
}

</script>