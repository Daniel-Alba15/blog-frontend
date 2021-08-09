<template>
  <div v-if="post.length > 0">
    <PostDetailCard :post="post[0]" />
    <CommentBox
      @comment-added="comments = fetchComments(post[0].post_id)"
      v-if="getUser()"
      :postId="post[0].post_id"
    />
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
    async fetchPost(id, slug) {
      const res = await fetch(process.env.VUE_APP_BASE_URL + `post/${id}`);
      const { data } = await res.json();

      this.post = data;
    },
    async fetchComments(id) {
      const res = await fetch(
        process.env.VUE_APP_BASE_URL + `post/comments/${id}`
      );
      const data = await res.json();

      if (!data.success) {
        console.log(data.error);
        return;
      }

      this.comments = data.data;
    }
  },
  async mounted() {
    console.log(this.$route.params.id, this.$route.params.slug);
    await this.fetchPost(this.$route.params.id, this.$route.params.slug);
    await this.fetchComments(this.post[0].post_id);
  }
};
</script>
