import { createStore } from "vuex";
import axios from "axios";
const url = 'http://localhost:3000/post/';
export default createStore({
  state: { count: 0, posts: null, user: null,auth:false },
  mutations: {
    increment(state) {
      state.count++
    },
    SET_POSTS(state, posts) {
      this.state.posts = posts
    },
    SET_USER(state, user) {
      this.state.user = user
    },
    SET_AUTH(state, check) {
      this.state.auth = check
    },
  },
  actions: {
    fetchData({ commit }) {
      axios.get(url)
        .then(response => {
          commit('SET_POSTS', response.data)
        })
    },
    setuser({ commit }) {
      const user = localStorage.getItem('user');
      
      
        axios.get('http://localhost:3000/authcheck/'+user)
        .then(response => {
          commit('SET_AUTH', response.data)

          if(response.data){
          commit('SET_USER', user)
        }
        })



      
    },

  },
  modules: {},
});
