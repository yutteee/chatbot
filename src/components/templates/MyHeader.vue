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
  data() {
    return {
      isLogin: true
    }
  },
  mounted () {
    if(this.$store.state.user_id == 0) {
      this.isLogin = false;
    }
  }
}
</script>

<style scoped>
header {
    height: 64px;
    background-color: #525F7F;
}
</style>