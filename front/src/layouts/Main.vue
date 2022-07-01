<template>
  <div>
    <ul>
      <li><v-link href="/">Home</v-link></li>
      <li><v-link href="/register">Register</v-link></li>
      <li><v-link href="/login">Login</v-link></li>
      <li><v-link href="/user/profile">Profile</v-link></li>
      <li><v-link href="/crypto">Crypto List</v-link></li>
      <li><v-link href="/article'">Articles</v-link></li>
      <li><v-link href="/crypto/history">History</v-link></li>
      <li><v-link href="/crypto/info">Crypto Details</v-link></li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import VLink from "../components/VLink.vue";
export default {
  components: {
    VLink,
  },
};
</script>
