<template>
  <div class="container mt-3">
    <h1 class="text-center">{{ post.title }}</h1>
    <span class="mt-5" v-html="postEscaped"></span>
  </div>
</template>

<script>
export default {
  name: "PostDetailCard",
  props: {
    post: Object
  },
  data() {
    return {
      postEscaped: ""
    };
  },
  mounted() {
    this.postEscaped = this.$func.escape(this.post.content);
  }
};
</script>
