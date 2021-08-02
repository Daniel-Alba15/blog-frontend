<template>
  <div class="mt-4">
    <main v-if="posts.length > 0" class="container">
      <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
          <h1
            class="display-4 fst-italic"
            v-html="this.$func.unescape(posts[0].title)"
          ></h1>
          <p
            class="lead my-3"
            v-html="
              this.$func.unescape(posts[0].content).substring(0, 150) + '...'
            "
          ></p>
          <p class="lead mb-0">
            <router-link
              class="text-white fw-bold"
              :to="'/post/' + posts[0].slug"
              >Continuar leyendo...</router-link
            >
          </p>
        </div>
      </div>
      <PostCard :posts="posts.slice(1)" />
      <nav aria-label="Page navigation example" class="mt-3 mb-5">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <button
              @click="disminuir"
              class="page-link bg-dark text-light"
              tabindex="-1"
              aria-disabled="true"
            >
              Anterior
            </button>
          </li>
          <li class="page-item">
            <button @click="aumentar" class="page-link bg-dark text-light">
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </main>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import PostCard from "../components/PostCard.vue";

export default {
  name: "Home",
  data() {
    return {
      posts: [],
      limit: 7,
      offset: 0
    };
  },
  components: {
    PostCard,
    Button
  },
  methods: {
    async fetchPosts() {
      const res = await fetch(
        `https://blog-backend-server.herokuapp.com/api/post/all?limit=${this.limit}&offset=${this.offset}`
      );
      const { data } = await res.json();

      return data;
    },
    async aumentar() {
      this.offset += 7;
      const response = await this.fetchPosts();

      if (response.length > 0) {
        this.posts = response;
      }
    },
    async disminuir() {
      if (this.offset > 1) {
        this.offset -= 7;
      }

      const response = await this.fetchPosts();
      this.posts = response;
    }
  },
  async created() {
    this.posts = await this.fetchPosts();
  }
};
</script>
