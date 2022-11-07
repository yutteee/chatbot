<template>
    <button v-on:click="$emit('submit')">
        <div>Login</div>
    </button>
</template>

<script>
export default {
  emits:['submit']
}

</script>

<style scoped>
button {
  width: 100px;
  height: 40px;
  font-size: 20px;
  background-color: #203B80;
  color: #FFF;
  cursor: pointer;
  border-radius: 3px;
  border: 0;
  box-shadow: 2px 1px 1px rgb(58, 58, 58);
}
</style>