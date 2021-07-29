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
          <h5 class="modal-title" id="signupModalLabel">Sign up</h5>
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
              <label for="inputUsername" class="form-label">Username</label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                id="inputUsername"
              />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="inputPassword"
                aria-describedby="passwordHelp"
              />
              <div id="passwordHelp" class="form-text">
                Your password must be 8-20 characters long.
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <!-- <form @submit="login">
          <div class="modal-body">
            <label for="username" class="m-auto">Username:</label>
            <input
              class="d-block m-auto rounded-3"
              v-model="username"
              type="text"
              placeholder="username"
              name="username"
            />
            <label for="password" class="m-auto">Password:</label>

            <input
              class="d-block m-auto mt-3 rounded"
              v-model="password"
              type="password"
              placeholder="password"
              name="password"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </form> -->
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
      password: ""
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      if (this.username != "" && this.password != "") {
        const response = await fetch("http://localhost:3000/api/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });

        const data = await response.json();
        console.log(data);
      } else {
        alert("Llene todos los campos");
      }
    }
  }
};
</script>
