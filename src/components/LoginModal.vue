<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    aria-labelledby="loginModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">Iniciar sesión</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit="login" class="w-50 m-auto my-2">
          <div class="modal-body">
            <div class="mb-3">
              <label for="inputUsername" class="form-label">Usuario</label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                id="inputUsername"
              />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Contraseña</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="inputPassword"
              />
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-primary m-auto"
                data-bs-dismiss="modal"
              >
                Aceptar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End modal -->
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Modal",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations(["setUser", "setToken", "setAvatar"]),
    async login(e) {
      e.preventDefault();
      if (this.username != "" && this.password != "") {
        const response = await fetch(
          process.env.VUE_APP_BASE_URL + "user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password
            })
          }
        );

        const data = await response.json();

        if (!data.success) {
          console.log(data.error);
          return;
        }

        const { user, token, avatar } = data.data;

        this.setUser(user);
        this.setToken(token);
        this.setAvatar(avatar);
      } else {
        alert("Llene todos los campos");
      }
    }
  }
};
</script>
