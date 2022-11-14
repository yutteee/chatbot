<template>
<div>
  <MyHeader></MyHeader>
  <form @submit.prevent="submitToken">
  <input type="text" placeholder="Enter token" v-model="token" />
  <button type="submit">Submit</button>
</form>
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
  data() {
    return {
      token: '',
    }
  },
  methods: {
    submitToken : function () {
      console.log(this.token);
      // 本当はchatモーダル開いたときに接続したい
      SocketioService.setupSocketConnection(this.token);
    }
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
}
</script>