<template>
  <div class="row mb-2">
    <div v-for="post in posts" :key="post.post_id" class="col-md-6">
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0" v-html="post.title"></h3>
          <div class="mb-1 text-muted">
            {{ this.$func.formatDate(post.created_at) }}
          </div>
          <div
            class="card-text mb-auto"
            v-html="this.$func.unescape(post.content).substring(0, 160) + '...'"
          ></div>
          <router-link
            :to="'/post/' + post.post_id + '/' + post.slug"
            class="stretched-link"
            >Continuar leyendo</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["posts"]
};
</script>
