<template>
  <div class="row mb-2">
    <div v-for="post in posts" :key="post.post_id" class="col-md-6">
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <h4 class="mb-0">{{ post.title }}</h4>
          <div class="mb-1 text-muted">
            {{ this.$func.formatDate(post.created_at) }}
          </div>
          <p
            class="card-text mb-auto"
            v-html="this.$func.escape(post.content).substring(0, 150) + '...'"
          ></p>
          <router-link :to="'/post/' + post.slug" class="stretched-link"
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
