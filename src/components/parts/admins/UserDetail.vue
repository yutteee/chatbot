<template>
    <div>
        <img :src="require(`../../../assets/${userImage}.png`)"/>
        <div>
            <div>name:</div>
            <div>{{userName}}</div>
        </div>
        <div>
            <div>id:</div>
            <div>{{userId}}</div>
        </div>
        <div>
            <div>birthday:</div>
            <div>{{userBirthday}}</div>
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