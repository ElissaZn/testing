<template>
<div>
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="onLogin"> Login </button>
</div>
</template>
<script>
import { useRouter } from "vue-router";
import { ref} from 'vue'

export default {
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const onLogin = () => {
      if (username.value === "elissa" && password.value === "elissa@123") {
        router.push("/users");
      } else {
        console.log("Invalid credentials");
      }
    };

    return {
      username,
      password,
      onLogin
    };
  }
};
</script>
<style>
</style>
