<template>
 <h1>Sing Up</h1>
  <form v-on:submit.prevent="onSubmit">
    <div>
      <label>userName : </label>
      <input
        type="text"
        v-model="userName"
        placeholder="Enter userName"
        name="userName"
        required
      />
      <label>Password : </label>
       <input
        type="password"
        v-model="password"
        placeholder="Enter password"
        name="password"
        required
      />
      <button type="submit">add user</button>
    </div>
  </form>

</template>

<script>
import axios from "axios";
export default {
  name: "UserAdd",
  beforeMount() {

  },
  data() {
    return {userName: null, password: null };
  },
  methods :{
onSubmit: function(){
      const newUSer = { userName: this.userName,password:this.password };

   axios
      .post('http://localhost:3000/user/create',newUSer)
      .then((response) => {
        console.log(response.data)

      });
},

  },
  
};
</script>
