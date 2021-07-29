<template>
  <span v-html="avatar"></span>
</template>

<script>
export default {
  name: "Avatar",
  data() {
    return {
      avatar: ""
    };
  },
  mounted() {
    this.avatar = localStorage.getItem("avatar");
  }
};
</script>
