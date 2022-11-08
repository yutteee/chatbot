<template>
    <label>
        <font-awesome-icon
            icon="fa-solid fa-link"
            class="icon"/>
        <input type="file" v-on:change="selectFile">
    </label>
    
</template>

<script>
export default {
    emits:['handleClick'],
    methods: {
        selectFile : function(event) {
            this.fileData = event.target.files[0]
            console.log(event.target.files[0])
            console.log('aaa')
        }
    }
}
</script>

<style scoped>
.icon {
    width: 25px;
    height: 25px;
}

input {
  display: none;
}
</style>