<template>
  <div></div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Logout",
  methods: {
    ...mapMutations(["deleteUser", "deleteToken", "deleteAvatar"]),
    logoutUser() {
      this.deleteUser();
      this.deleteToken();
      this.deleteAvatar();
    }
  },
  created() {
    this.logoutUser();
  },
  mounted() {
    this.$router.push("/");
  }
};
</script>
