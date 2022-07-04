<template>
  <div class="home">
<h1>this is home page</h1>

<ul id="array-rendering">
  <li v-for="post in posts" :key="post._id">
    {{ post.title }} and posted by {{post.user.userName}}
  </li>
</ul>
  </div>
</template>

<script>
//import store from '../store/index';


export default {
  name: "Home",
  computed: {
    posts () {
      return this.$store.state.posts
    },
  },

};
</script>
