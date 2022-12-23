<template>
  <header>
    <LoginProfile v-show="isLogin"></LoginProfile>
  </header>
</template>

<script>
import LoginProfile from '../parts/LoginProfile.vue';

export default {
  components: {
    LoginProfile
  },
  props: {
    isLogin: Boolean
  }
}
</script>

<style scoped>
header {
    height: 64px;
    background-color: #525F7F;
}
</style>