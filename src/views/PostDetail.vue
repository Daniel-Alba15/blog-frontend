<template>
  <div v-if="post.length > 0">
    <PostDetailCard :post="post[0]" />
    <CommentBox v-if="getUser()" :postId="post[0].post_id" />
    <CommentsList :comments="comments" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import PostDetailCard from "../components/PostDetailCard.vue";
import CommentBox from "../components/CommentBox.vue";
import CommentsList from "../components/CommentsList.vue";

export default {
  name: "PostDetail",
  components: {
    PostDetailCard,
    CommentBox,
    CommentsList
  },
  data() {
    return {
      post: [],
      comments: []
    };
  },
  methods: {
    ...mapGetters(["getUser"]),
    async fetchPost(slug) {
      const res = await fetch(`https://blog-backend-server.herokuapp.com/api/post/${slug}`);
      const { data } = await res.json();

      return data;
    },
    async fetchComments(id) {
      const res = await fetch(`https://blog-backend-server.herokuapp.com/api/post/comment/${id}`);
      const { data } = await res.json();

      return data;
    }
  },
  async mounted() {
    this.post = await this.fetchPost(this.$route.params.id);
    this.comments = await this.fetchComments(this.post[0].post_id);
  }
};
</script>
