<template>
  <div class="container mt-3">
    <h1 class="text-center" v-html="this.$func.unescape(post.title)"></h1>
    <p>
      <i>Publicado: {{ this.$func.formatDate(post.created_at) }}</i>
    </p>
    <p class="text-center">
      <img class="container" :src="post.image" :alt="post.title" />
    </p>
    <div class="my-5">
      <div class="container" v-html="postEscaped"></div>
    </div>
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
    this.postEscaped = this.$func.unescape(this.post.content);
  }
};
</script>
