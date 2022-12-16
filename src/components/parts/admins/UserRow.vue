<template>
    <div>
        {{userName}}
    </div>
</template>

<script>
export default {
    props: {
        userId: Number,
        userName: String,
        userImg: String,
        userBirthDay: Date
    }
}
</script>