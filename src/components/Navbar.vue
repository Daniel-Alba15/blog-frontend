<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid d-flex justify-content-between">
        <router-link class="navbar ps-4" to="/"
          ><img width="180" src="../assets/logo.png" alt=""
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul v-if="!userIsLoggedIn" class="navbar-nav">
            <li class="nav-item me-3 mb-2">
              <Button
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                text="Log in"
              />
              <LoginModal />
            </li>
            <li class="nav-item">
              <Button
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
                text="Sing up"
              />
              <SignupModal />
            </li>
          </ul>
          <ul v-else class="navbar-nav align-items-baseline">
            <li class="nav-item me-3 mb-2">
              <span v-html="getAvatar" class="h-25"></span>
            </li>
            <li class="nav-item">
              <router-link to="/logout"><Button text="Log out"/></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Button from "./Button.vue";
import LoginModal from "./LoginModal.vue";
import SignupModal from "./SignupModal.vue";

export default {
  name: "Navbar",
  data() {
    return {
      userLogged: false,
      showModal: false,
      avatar: ""
    };
  },
  components: {
    Button,
    LoginModal,
    SignupModal
  },
  methods: {},
  computed: {
    ...mapGetters(["userIsLoggedIn", "getAvatar"])
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  mounted() {
    this.avatar = localStorage.getItem("avatar");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeMount() {
    console.log("beforeMount");
  }
};
</script>
