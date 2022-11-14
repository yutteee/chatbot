<template>
<div>
  <MyHeader></MyHeader>
  <router-view/>
</div>
</template>

<script>
import MyHeader from './components/templates/MyHeader.vue'
import SocketioService from './services/socketio.service.js';

export default {
  components: {
    MyHeader
  },
  // 本当はchatモーダル開いたときに接続したい
  created() {
    SocketioService.setupSocketConnection();
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
}
</script>