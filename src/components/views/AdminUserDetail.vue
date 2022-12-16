<template>
<div>{{user.name}}</div>
</template>

<script>
export default {
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