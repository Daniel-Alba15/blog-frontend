<template>
  <div class="container my-4">
    <form action="" @submit="sendPost">
      <input type="text" v-model="title" placeholder="title" />
      <editor
        v-model="content"
        :apiKey="apiKey"
        :init="{
          height: 500,
          menubar: 'insert',
          plugins: [
            'advlist autolink lists link image charmap',
            'searchreplace visualblocks code fullscreen',
            'print preview anchor insertdatetime media',
            'paste code help wordcount table'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent image | help'
        }"
      >
      </editor>
      <button type="submit" class="mt-3" text="Publicar">
        Publicar
      </button>
    </form>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import { getTinymce } from "@tinymce/tinymce-vue/lib/cjs/main/ts/TinyMCE";
import { mapGetters } from "vuex";

import Button from "../components/Button.vue";

export default {
  name: "CreatePost",
  components: {
    Editor,
    Button
  },
  data() {
    return {
      title: "",
      content: "",
      apiKey: process.env.VUE_APP_API_KEY
    };
  },
  methods: {
    ...mapGetters(["getToken"]),
    getContent() {
      return getTinymce().activeEditor.getContent();
    },
    async sendPost(e) {
      e.preventDefault();

      const res = await fetch("http://localhost:3000/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "BEARER " + this.getToken()
        },
        body: JSON.stringify({
          title: this.title,
          content: this.content
        })
      });
      const data = await res.json();
      console.log(data);
    }
  }
};
</script>
