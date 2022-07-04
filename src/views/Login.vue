<template>
  <h1>Login</h1>
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
      <button type="submit">Login</button>
      <h1 v-if="showerror">sorry your u cant login</h1>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  beforeCreate() {
    const user = localStorage.getItem("user");

    axios.get("http://localhost:3000/authcheck/" + user).then((response) => {
      if (response.data) {
        this.$router.push({ path: '/' })

      }
    });
  },
  data() {
    return { userName: null, password: null, showerror: false };
  },
  methods: {
    onSubmit: function () {
      this.showerror = false;
      const login = { userName: this.userName, password: this.password };

      axios.post("http://localhost:3000/login", login).then((response) => {
        // console.log(response.data)
        if (response.data == "sorry") {
          this.showerror = true;
        } else {
          this.showerror = false;
          localStorage.setItem("user", response.data);
          this.$store.dispatch("setuser");
                  this.$router.push({ path: '/' })

        }
      });
    },
  },
};
</script>
