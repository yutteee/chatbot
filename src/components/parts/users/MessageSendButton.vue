<template>
    <font-awesome-icon
        icon="fa-regular fa-paper-plane"
        :style="iconColor"
        class="icon"/>
</template>

<script>
export default {
    props: {
        color: String
    },
    computed: {
        iconColor() {
            return {
                'color' : this.color
            }
        }
    }
}
</script>

<style scoped>
.icon {
    width: 25px;
    height: 25px;
    color: #636363;
}
</style>