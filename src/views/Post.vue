<template>
  <h1>All posts</h1>
  <ul id="array-rendering">
    <li v-for="post in posts" :key="post._id">
      {{ post.title }} and posted by {{ post.user.userName }}
      <router-link v-if="post.user.userName == userName" v-bind:to="'/post/edit/' + post._id"> | Edit</router-link>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "Post",
  beforeCreate() {
    const user = localStorage.getItem("user");

    axios.get("http://localhost:3000/post/userid/" + user).then((response) => {
      if (response.data) {
       this.userName=response.data.userName;
       this.id=response.data._id;
      }
    });
  },
  data() {
    return { userName: null, id: null };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
