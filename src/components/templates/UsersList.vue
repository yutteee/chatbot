<template>
    <UserRow 
        v-for="user in users" 
        :key="user.id"
        :userId="user.id"
        :userName="user.name"
        :userImage="user.image"
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