<template>
    <div class="user-detail">
        <div class="user-detail-row">
            <img :src="require(`../../../assets/${userImage}`)" class="user-image"/>
        </div>
        <div class="user-detail-row">
            <div class="user-detail-row-title">name:</div>
            <div class="user-detail-row-value">{{userName}}</div>
        </div>
        <div class="user-detail-row">
            <div class="user-detail-row-title">id:</div>
            <div class="user-detail-row-value">{{userId}}</div>
        </div>
        <div class="user-detail-row">
            <div class="user-detail-row-title">birthday:</div>
            <div class="user-detail-row-value">{{userBirthday}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userId: Number,
        userName: String,
        userImage: String,
        userBirthday: String
    }
}
</script>

<style setup>
.user-detail-row {
    display: flex;
    justify-content: center;
}

.user-image {
    width: 280px;
    border-radius: 50%;
    object-fit: cover;
}

.user-detail-row-title {
    width: 40%;
}

.user-detail-row-value {
    width: 40%;
}
</style>