import { createStore } from 'vuex'
import http from '../axios/index';
import router from '../router/index.js';

export default createStore({
  state: {
    // todo: Receive information about who is logged in from BE.
    user_img: "logo.png",
    user_name: "",
    user_id: 0,
    users: [
      {
          id: 1,
          name: "yusaku",
          image: "logo",
          birthday: "2002/07/12"
      },
      {
          id: 2,
          name: "nakamura",
          image: "logo",
          birthday: "2000/02/01"
      },
    ],
  },
  getters: {
  },
  mutations: {
    logined : function(state, {name, id}) {
      state.user_name = name;
      state.user_id = id;
    }
  },
  actions: {
    login : function({commit}, user) {
      http.post('/login', user)
        .then(function(response){
            console.log(response);
            commit('logined', user);
            router.push('/users');
        }.bind(this))
        .catch(function(err) {
            console.log(err);
            alert("user not found.");
        })
    }
  },
  modules: {
  }
})
