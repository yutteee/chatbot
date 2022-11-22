import { createStore } from 'vuex'

export default createStore({
  state: {
    // todo: Receive information about who is logged in from BE.
    user_img: "logo.png",
    user_name: "",
    user_id: 0,
  },
  getters: {
  },
  mutations: {
    login : function(state, {name, id}) {
      state.user_name = name;
      state.user_id = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
