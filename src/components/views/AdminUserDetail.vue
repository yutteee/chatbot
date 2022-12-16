<template>
<div>{{user.name}}</div>
</template>

<script>
export default {
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
                    birthday: "2000/02/01"
                },
            ],
            user: {}
        }
    },
    created () {
        const strId = this.$route.params.id;
        const intId = Number(strId);
        const searchedUser = this.users.find(({ id }) => id === intId);
        console.dir(searchedUser)
        this.user = searchedUser;
    }
}
</script>