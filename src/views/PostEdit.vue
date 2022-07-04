<template>
  <div v-if="show">
    <h1>Edit post id {{ post?._id }}</h1>
    <form v-on:submit.prevent="onSubmit">
      <div>
        <label>title : </label>
        <input
          type="text"
          v-model="title"
          placeholder="Enter title"
          name="title"
          required
        />
        <label>info : </label>
        <textarea name="info" v-model="info"> </textarea>
        <button type="submit">update post</button>
      </div>
    </form>

    <form v-on:submit.prevent="onDelete">
      <button type="submit">Delete post</button>
    </form>
  </div>

  <div v-if="!show">error</div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostEdit",
  beforeCreate() {
    const user = localStorage.getItem("user");

    axios.get("http://localhost:3000/post/userid/" + user).then((res) => {
      if (res.data) {
        axios
          .get("http://localhost:3000/post/update/" + this.$route.params.id)
          .then((response) => {
            if (res.data.userName == response.data.user.userName) {
              this.post = response.data;
              this.title = response.data.title;
              this.info = response.data.info;
              console.log(this.$route.params.id);
              if (response.data._id) {
                this.show = true;
              }
            }
          });
      }
    });
  },
  beforeMount() {},
  data() {
    return { post: null, title: null, info: null, show: false };
  },
  methods: {
    onSubmit: function () {
      const updateddata = { title: this.title, info: this.info };

      axios
        .put(
          "http://localhost:3000/post/update/" + this.$route.params.id,
          updateddata
        )
        .then((response) => {
          console.log(response.data);
          this.$store.dispatch("fetchData");
          this.$router.push({ path: "/" });
        });
    },
    onDelete: function () {
      axios
        .post("http://localhost:3000/post/delete/" + this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          this.$store.dispatch("fetchData");
          this.$router.push({ path: "/" });
        });
    },
  },
};
</script>
