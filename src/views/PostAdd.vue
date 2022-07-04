<template>
 <h1>Add post</h1>
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
      <button type="submit">add post</button>
    </div>
  </form>

</template>

<script>
import axios from "axios";
export default {
  name: "PostAdd",
    beforeCreate() {
    const user = localStorage.getItem("user");

    axios.get("http://localhost:3000/authcheck/" + user).then((response) => {
      if (!response.data) {
        this.$router.push({ path: '/' })

      }
    });
  },
  data() {
    return {title: null, info: null };
  },
  methods :{
onSubmit: function(){
      const updateddata = { title: this.title,info:this.info,user:this.$store.state.user };

   axios
      .post('http://localhost:3000/post/create',updateddata)
      .then((response) => {
       this.$store.dispatch('fetchData')

        console.log(response.data)

      });
},

  },
  
};
</script>
