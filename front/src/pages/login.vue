<template>
  <div style="position: relative">
    <div
      style="
        height: 400px;
        width: 800px;
        background: var(--gray);
        border-radius: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
      "
    >
      <h1 class="title">Welcome to Kryptos</h1>
      <div class="row">
        <form class="col-7" style="padding: 10px">
          <h3>
            <span>Log In</span>
          </h3>
          <div style="display: flex">
            <label style="width: 100px">Email :</label>
            <input
              class="input-search"
              name="email"
              type="text"
              v-model="user.email"
              placeholder="E-mail"
              style="width: calc(100% - 120px)"
            />
          </div>
          <br />
          <div style="display: flex">
            <label style="width: 100px">Password :</label>
            <input
              class="input-search"
              type="password"
              name="password"
              v-model="user.password"
              placeholder="Password"
              style="width: calc(100% - 120px)"
            />
          </div>
          <!-- <br />
          <div style="display: flex">
            <label style="width: 100px">Confirm Password :</label>
            <input
              class="input-search"
              type="text"
              v-model="user.confirmedPassword"
              placeholder="Password"
              style="width: calc(100% - 120px)"
            />
          </div> -->
          <br />
          <button type="button" v-on:click="this.login()" class="-btn">Login</button>
          <button v-on:click="this.register()" class="-btn tab-btn">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
//import router from "../routes";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: null,
        password: null,
        // confirmedPassword: null,
      },
    };
  },
  methods: {
    login: async function () {
      // console.log("email = " + this.user.email);
      // console.log("password = " + this.user.password);
      //   console.log("confirmedPassword = " + this.user.confirmedPassword);

      const response = await fetch("http://127.0.0.1:3000/users/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "salim.qllt@outlook.fr",
          password: this.user.password,
        }), // body data type must match "Content-Type" header
      });
      console.log("response = " + JSON.stringify(response));

      // axios({
      // method: "POST",
      // url: "http://127.0.0.1:3000/users/login",
      // mode: "no-cors",
      // headers: {
      // 'Access-Control-Allow-Origin': '*',
      // 'Content-Type': 'application/json',
      // },
      // withCredentials: true,
      // credentials: 'same-origin',
      // data: {
      // email: this.user.email,
      // password: this.user.password,
      // }
      // }).then((response) => {
      // console.log("response = " + response);
      // router.push({ name: "Home" });
      // })
      // .catch((error) => {
      // console.log("error = " + error);
      // });
    },
    register: function () {
      console.log("register");
      // router.push({ name: "register" });
    },
  },
};
</script>

<style scoped>
.title {
  margin-left: 2%;
}

.tab {
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.2s;
}

.tab:hover {
  opacity: 1;
  color: var(--main);
}

.tab-btn {
  cursor: unset;
  opacity: 0.5;
  transition: all 0.2s;
}
</style>
