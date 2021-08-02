<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap");
h1 {
  font-size: 3em;
}
p,
li {
  font-size: 1.3em;
  font-family: "Mulish", sans-serif;
}
</style>
