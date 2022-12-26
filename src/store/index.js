import { createStore } from 'vuex'
import http from '../axios/index';
import router from '../router/index.js';
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    user_image: "logo.png",
    user_name: "",
    user_id: 0,
    roomID: "",
    users: [],
  },
  getters: {
  },
  mutations: {
    logined : function(state, user_data) {
      state.user_image = user_data.image;
      state.user_name = user_data.name;
      state.user_id = user_data.id;
      state.roomID = user_data.roomID;
    },
    admin: function(state, admin_data) {
      state.user_name = admin_data.name;
      state.user_id = admin_data.id;
      state.user_image = admin_data.image;
    },
    saveAllUsers : function(state, users) {
      state.users = users;
    },
    enterRoom: function(state, room_id) {
      state.roomID = room_id;
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
    adminLogin: function({commit}, admin) {
      http.post('/adminLogin', admin) 
        .then(function(response){
          console.log(response);
          commit('admin', response.data);
          router.push('/admin');
        }.bind(this))
        .catch(function(err) {
          console.log(err);
          alert("input error")
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
        });
    }
  },
  modules: {
  },
  plugins: [createPersistedState(
    {
      storage: window.sessionStrage	
    }
  )]
})
