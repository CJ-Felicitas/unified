<template>
  <div class="container-fluid" :style="{ backgroundImage: `url(${imageUrl})` }">
    <div class="images">
      <img src="/src/assets/DSWDLogo.png" alt="" />
    </div>

    <div
      class="form-container"
      :style="{ display: loginFormVisible ? 'block' : 'none' }"
      id="login-form"
    >
      <h4 class="text-start">Welcome</h4>
      <h1 class="text-start">Sign in to</h1>
      <h4 class="text-start">
        <span>UNIFIED</span>
        <span style="font-weight: bold; color: blue"> X</span
        ><span style="font-weight: bold; color: red">I</span>
      </h4>
      <br />
      <form @submit.prevent="login">
        <div class="form-floating">
          <input
            v-model="email"
            type="Username"
            placeholder="Enter your Username"
            class="form-control"
          />
          <label for="floatingInput" style="color: gray">Email address</label>
        </div>
        <div class="form-floating">
          <input
            v-model="password"
            type="password"
            placeholder="Enter your Password"
            class="form-control"
          />
          <label for="floatingInput" style="color: gray">Password</label>
        </div>

        <br />
        <div v-if="error" class="error-message">
          {{ error }}
        </div>
        <button type="submit" :disabled="loading">
          <span v-if="!loading">Login</span>
          <span v-else>Loading...</span>
        </button>
      </form>
      <p class="visually-hidden">
        Don't have an account?
        <a href="#" @click="switchToSignup" id="signup-link">Sign up</a>
      </p>
    </div>

    <div
      class="form-container"
      :style="{ display: signupFormVisible ? 'block' : 'none' }"
      id="signup-form"
    >
      <h1>Sign Up</h1>
      <form>
        <label for="new-username">Username</label>
        <input type="text" id="new-username" name="new-username" required />
        <label for="new-email">Email</label>
        <input type="email" id="new-email" name="new-email" required />
        <label for="new-password">Password</label>
        <input type="password" id="new-password" name="new-password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?
        <a href="#" @click="switchToLogin" id="login-link">Login</a>
      </p>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import axios from "axios";
import { backendURL } from "@/config.js";

export default {
  name: "LoginForm",
  components: { Footer },
  data() {
    return {
      email: "",
      name: "",
      password: "",
      error: false,
      loading: false,

      loginForm: null,
      signupForm: null,
      loginLink: null,
      signupLink: null,

      loginFormVisible: true,
      signupFormVisible: false,

      imageUrl: null,
    };
  },
  async created() {
    try {
      const response = await axios.get(`${backendURL}/api/latest`);
      this.imageUrl = response.data.image; // Set imageUrl to the full URL returned by the API
    } catch (error) {
      console.error("Failed to fetch latest image:", error);
      this.imageUrl = "/src/assets/dswd_background.png"; // Set imageUrl to a local image
    }
  },
  mounted() {
    this.loginForm = document.getElementById("login-form");
    this.signupForm = document.getElementById("signup-form");
    this.loginLink = document.getElementById("login-link");
    this.signupLink = document.getElementById("signup-link");

    this.loginLink.addEventListener("click", (event) => {
      event.preventDefault();
      this.signupForm.style.display = "none";
      this.loginForm.style.display = "block";

      setTimeout(() => {
        this.signupForm.style.opacity = 0;
        this.loginForm.style.opacity = 1;
      }, 10);
    });

    this.signupLink.addEventListener("click", (event) => {
      event.preventDefault();
      this.loginForm.style.display = "none";
      this.signupForm.style.display = "block";

      setTimeout(() => {
        this.loginForm.style.opacity = 0;
        this.signupForm.style.opacity = 1;
      }, 10);
    });
  },
  methods: {
    switchToLogin() {
      this.signupFormVisible = false;
      this.loginFormVisible = true;
    },

    switchToSignup() {
      this.loginFormVisible = false;
      this.signupFormVisible = true;
    },

    // * THIS LOGIN FUNCTION IS FOR DEVELOPMENT PURPOSES ONLY
    // login() {
    //   // Set loading state to true
    //   this.loading = true;

    //   // Simulate a delay to mimic a server response (remove this in a real scenario)
    //   setTimeout(() => {
    //     // Perform authentication logic here (e.g., check username and password)
    //     if (this.email === "User" && this.password === "user") {
    //       // Authentication successful, set user as authenticated in localStorage
    //       sessionStorage.setItem("user", "authenticated");

    //       // Navigate to the dashboard
    //       this.$router.push("/swda");
    //     } else if (this.email === "Admin" && this.password === "admin") {
    //       // Authentication successful, set user as authenticated in localStorage
    //       sessionStorage.setItem("admin", "authenticated");

    //       // Navigate to the dashboard
    //       this.$router.push("/adminswda");
    //     } else {
    //       // Authentication failed, display error message
    //       this.error = true;
    //     }

    //     // Reset loading state to false after authentication logic
    //     this.loading = false;
    //   }, 1000); // Simulated delay of 1 second
    // },

    // * WORKING LOGIN FOR ADMIN DASHBOARD - USER DASHBOARD LOGIN - FOR PRODUCTION SERVER
    login() {
      this.loading = true; // Set loading state to true

      axios
        .post(`${backendURL}/api/adminLogin`, {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log("Request Payload:", this.email, this.password);
          console.log("Server Response:", response);
          this.name = response.data.Name;
          console.log("Name:", this.name);
          localStorage.setItem("name", this.name);
          setTimeout(() => {
            // Handle successful login and user roles configuration
            if (response.data.Role === "admin") {
              sessionStorage.setItem("admin", "authenticated");
              this.$router.push("/adminswda");
            } else if (response.data.Role === "swdaAdmin") {
              sessionStorage.setItem("swdaAdmin", "authenticated");
              this.$router.push("/adminswda");
            } else if (response.data.Role === "cbssAdmin") {
              sessionStorage.setItem("cbssAdmin", "authenticated");
              this.$router.push("/admincbss");
            } else if (response.data.Role === "hrAdmin") {
              sessionStorage.setItem("hrAdmin", "authenticated");
              this.$router.push("/adminhr");
            } else if (response.data.Role === "osdAdmin") {
              sessionStorage.setItem("osdAdmin", "authenticated");
              this.$router.push("/adminosp");
            }

            // Handle unexpected role or scenario
            else if (this.email === "" && this.password === "") {
              this.error = "Please enter your credentials.";
            } else if (response.data.Role === "user") {
              sessionStorage.setItem("user", "authenticated");
              this.$router.push("/swda");
            } else {
              // Handle unexpected role or scenario
              console.error("Unexpected role:", response.data.Role);
              this.error = "Unexpected role. Please contact support.";
            }

            this.error = null; // Reset error state on successful login
            this.loading = false; // Reset loading state after the request
          }, 500); // Delay of 3 seconds
        })
        .catch((error) => {
          // Delay the execution of the error handling code by 0.5 seconds
          setTimeout(() => {
            // Handle errors or invalid credentials
            if (this.email === "" && this.password === "") {
              this.error = "Please enter your credentials.";
            } else if (error.response && error.response.status === 400) {
              this.error = "Invalid credentials. Please try again.";
            } else if (error.response && error.response.status === 404) {
              this.error = "User not found. Please enter correct credentials.";
            } else {
              this.error = "An error occurred. Please try again.";
            }
            this.loading = false; // Reset loading state after the request
          }, 500);
        });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  background-color: #222;
}

.images {
  position: absolute;
  top: 1%;
  left: 1%;
}

.images img {
  width: 200px;
  visibility: hidden;

  @media only screen and (min-width: 375px) {
    width: 200px;
    visibility: visible;
  }

  @media only screen and (min-width: 830px) {
    width: 280px;
  }

  @media only screen and (min-width: 1280px) {
    width: 280px;
  }
}

.error-message {
  color: red;
  text-align: center;
  margin-bottom: 10px;
  margin-top: -10px;

  @media only screen and (min-width: 680px) {
    margin-bottom: 10px;
    margin-top: -35px;
  }
}

.container-fluid {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -60px;
  /* background-image: url("../assets/dswd_background.png"); */
  background-size: cover; /* Optional: adjust to your needs */
  background-repeat: no-repeat; /* Optional: adjust to your needs */
}

.form-container {
  width: 450px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  color: #ffffff;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
  font-size: 36px;
  color: black;
  font-weight: 600;
}

p,
label {
  color: black;
}

.text-start {
  text-align: start;
  margin-bottom: 10px;
  color: black;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
  font-size: 18px;
}

input {
  padding: 12px;
  border: 2px solid #878787;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
  color: black;
  background-color: #ffffff;
}

button {
  padding: 10px;
  background-color: #292d96;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #8c5fb2;
}

a {
  text-decoration: none;
  color: #b38bff;
  font-size: 18px;
  transition: color 0.2s ease-in-out;
}

a:hover {
  color: #8c5fb2;
}

p {
  text-align: center;
  margin: 8px;
}
</style>
