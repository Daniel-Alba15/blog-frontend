<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="signupModal"
    tabindex="-1"
    aria-labelledby="signupModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="signupModalLabel">Registrarse</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit="login" class="w-50 m-auto my-4">
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
                aria-describedby="passwordHelp"
              />
              <div id="passwordHelp" class="form-text">
                La contraseña debe tener una longitud entre 8 y 20 caractéres.
              </div>
            </div>
            <div class="mb-3">
              <label for="inputPassword2" class="form-label"
                >Confirmar contraseña</label
              >
              <input
                v-model="password2"
                type="password"
                class="form-control"
                id="inputPassword2"
              />
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-primary"
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
</template>

<script>
export default {
  name: "SignupModal",
  data() {
    return {
      username: "",
      password: "",
      password2: ""
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      if (this.username != "" && this.password != "") {
        if (this.password === this.password2) {
          const res = await fetch("https://blog-backend-server.herokuapp.com/api/user/signup",
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

          if (res.status == 409) {
            alert("El usuario ya existe");
          }
        } else {
          alert("Las contraseñas no coinciden");
        }
      } else {
        alert("Llene todos los campos");
      }
    }
  }
};
</script>
