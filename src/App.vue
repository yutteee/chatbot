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
  beforeUnmount() {
    SocketioService.disconnect();
  },
}
</script>

<style scoped>
.box {
  width: fit-content;
  height: 400px;
  border: solid 1px #000;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.messages {
  flex-grow: 1;
}

.input-div {
  display: flex;
  width: 100%;
}
</style>