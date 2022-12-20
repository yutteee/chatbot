import { createStore } from 'vuex'
import http from '../axios/index';
import router from '../router/index.js';

export default createStore({
  state: {
    user_img: "logo.png",
    user_name: "",
    user_id: 0,
    roomID: "",
    // server.jsから呼び出すようにする
    users: [],
  },
  getters: {
  },
  mutations: {
    logined : function(state, user_data) {
      state.user_img = user_data.image;
      state.user_name = user_data.name;
      state.user_id = user_data.id;
      state.roomID = user_data.roomID;
    },
    saveAllUsers : function(state, users) {
      state.users = users;
    }
  },
  actions: {
    login : function({commit}, user) {
      http.post('/login', user)
        .then(function(response){
            console.log(response);
            commit('logined', response.data);
            router.push('/users');
        }.bind(this))
        .catch(function(err) {
            console.log(err);
            alert("user not found.");
        });
    },
    getAllUsers: function({commit}) {
      http.post('/allUsers')
        .then(function(response){
          commit('saveAllUsers', response.data);
          console.log(response.data)
        })
        .catch(function(err) {
          console.log(err);
        })
    }
  },
  modules: {
  }
})
