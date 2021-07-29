<template>
  <div class="container mt-5">
    <h2 class="mb-3">Comentarios:</h2>
    <div v-for="comment in comments" :key="comment.comment_id" class="mb-5">
      <div class="card p-2">
        <span class="mb-3" v-html="comment.avatar"></span>
        <h5>{{ comment.username }}:</h5>
        <h3 class="mt-2 ps-4">{{ comment.description }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentsList",
  props: {
    comments: Array
  }
};
</script>
