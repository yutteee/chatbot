<template>
    <div class="user-row">
        <div class="user-name">
            <img :src="require(`../../../assets/${userImage}.png`)" class="user-image"/>
            <a href="#" class="user-link">{{userName}}</a>
        </div>
        <div class="user-id">{{userId}}</div>
        <div class="user-birthday">{{userBirthDay}}</div>
    </div>
</template>

<script>
export default {
    props: {
        userId: Number,
        userName: String,
        userImage: String,
        userBirthDay: String
    }
}
</script>

<style scoped>
.user-row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #8B8B8B;
}

.user-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.user-name {
    width: 40%;
    display: flex;
    align-items: center;
}

.user-id {
    width: 20%;
}

.user-birthday {
    width: 30%;
}
</style>