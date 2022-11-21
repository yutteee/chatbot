import axios from "axios";

const http = axios.create({
  baseURL:process.env.VUE_APP_SOCKET_ENDPOINT
});

export default http;