<template>
  <div class="container w-50 mt-xl-5 mb-5">
    <div class="card align-items-center border-0">
      <!-- avatar -->
      <Avatar class="flex-grow-1" />
      <!-- end avatar -->
      <h4 class="flex-grow-1">{{ username }}</h4>
    </div>
    <form @submit="createComment" class="mt-2 text-center">
      <textarea
        class="w-100"
        v-model="content"
        name="comment"
        id="comment"
        cols="50"
        rows="3"
      ></textarea>
      <button class="btn btn-success" type="submit">Aceptar</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Button from "./Button.vue";
import Avatar from "./Avatar.vue";

export default {
  name: "CommentBox",
  props: {
    postId: Number
  },
  data() {
    return {
      content: "",
      username: ""
    };
  },
  components: {
    Button,
    Avatar
  },
  methods: {
    ...mapGetters(["getToken", "getUser"]),
    async createComment(e) {
      e.preventDefault();
      const result = await fetch(
        "https://blog-backend-server.herokuapp.com/api/post/comment/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "BEARER " + this.getToken()
          },
          body: JSON.stringify({
            description: this.content,
            post_id: this.postId
          })
        }
      );
      this.content = "";
      this.$emit("comment-added");
    }
  },
  mounted() {
    this.username = JSON.parse(this.getUser()).username;
  }
};
</script>
