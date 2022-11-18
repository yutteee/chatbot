<template>
    <font-awesome-icon
        icon="fa-regular fa-paper-plane"
        v-on:click="$emit('handleClick')"
        :style="iconColor"
        class="icon"/>
</template>

<script>
export default {
    emits:['handleClick'],
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