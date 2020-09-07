<template>
  <div id="loginPage">
    <v-container :fluid="fluid" class="pa-0">
      <v-row no-gutters align="center" align-content="center" justify="center">
        <v-col cols="6">
          <div class="coverpage">
            <v-img
              src="./../assets/login/loginCover.png"
              gradient="to top right,  rgba(127,216,88,.7) ,rgba(26,115,232,.7)"
            >
            </v-img>
          </div>
        </v-col>
        <v-col cols="6" align-self="center">
          <div class="content">
            <v-row justify="center">
              <v-card class="pa-5 text-center form--login" :outlined="outlined">
                <v-card-title>
                  <v-img src="./../assets/login/Group 253.png"></v-img>
                </v-card-title>
                <v-card-subtitle class="mt-4 form--login--subtitle">
                  Welcome back! Please login to your account.
                </v-card-subtitle>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="Username"
                    :rules="usernameRules"
                    label="Username"
                    required
                  ></v-text-field>
                  <v-text-field
                    class="mt-3"
                    v-model="Password"
                    :rules="passwordRules"
                    label="Password"
                    required
                  ></v-text-field>
                  <div class="d-flex align-center justify-space-between my-5">
                    <v-checkbox
                      v-model="checkbox"
                      label="Remember me"
                    ></v-checkbox>
                    <v-btn text class="form--login--btnforgot"
                      >Forgot Password</v-btn
                    >
                  </div>
                  <v-btn rounded class="form--login--btn mt-10" depressed
                    >Login</v-btn
                  >
                </v-form>
              </v-card>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    return {
      fluid: true,
      outlined: true,
      Username: "",
      Password: "",
      checkbox: false,

      // Validate Section
      valid: false,
      usernameRules: [(v) => !!v || "Username is required"],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    login() {
      console.log("method login");
      this.$store
        .dispatch("admin/login", {
          email: this.Username,
          password: this.Password,
        })
        .then((res) => {
          alert(`${res.data.message} ${res.data.token}`);
          console.log(res.data);
        })
        .catch((err) => alert(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-height: 100vh;
  color: black;

  .coverpage {
    max-width: 100%;
    max-height: 100vh;
    overflow: hidden;
  }

  .content {
    .form--login {
      border: none;
      color: #646d82;

      &--subtitle {
        font-size: 15px;
        color: #afb6c6;
      }

      &--btnforgot {
        text-transform: none;
      }
      &--btn {
        color: white;
        width: 185px;
        height: 50px;
        background-color: #7fd858 !important;
        font-size: 18px;
      }
    }
    // .form--
  }
}
</style>
