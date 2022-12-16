<template>
    <MyHeader></MyHeader>
    <UsersList></UsersList>
</template>

<script>
import MyHeader from '../templates/MyHeader.vue'
import UsersList from '../templates/UsersList.vue'

export default {
    components: {
        MyHeader,
        UsersList
    },
}
</script>