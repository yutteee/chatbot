<template>
    <font-awesome-icon :icon="iconName" :style="iconColor" class="icon"/>
</template>

<script>
export default {
    props: {
        iconName: String,
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

<style>
.icon {
    width: 25px;
    height: 25px;
}
</style>