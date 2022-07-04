<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
     <router-link to="/post">post |</router-link>
         <router-link v-if="this.$store.state.auth" to="/post/create">Create post |</router-link>
             <span  v-if="this.$store.state.auth" v-on:click="logout"><b>Logout</b></span>
 |

                  <router-link v-if="!this.$store.state.auth" to="/singup">Create user  | </router-link> 

         <router-link v-if="!this.$store.state.auth" to="/login">Login</router-link> 


  </div>
  <router-view />
</template>

<script>
import store from './store/index';

store.dispatch('fetchData')
store.dispatch('setuser')

export default {

  methods:{
logout:function(){
localStorage.removeItem('user');
this.$store.dispatch('setuser')
        this.$router.push({ path: '/' })

}

  }

};
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
