<template>

  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title"> Login </h1>
        <form @submit.prevent="Login">
          <div class="field">
            <label> Username </label>
            <div class="control">
              <input type="text" name="username" class="input" v-model="username">
            </div>
          </div>

          <div class="field">
            <label> Password </label>
            <div class="control">
              <input type="password" name="pwd" class="input" v-model="pwd">
            </div>
          </div>
          <router-link to="/forgotpass">Forgot password?</router-link>
          <div class="notification is-danger" v-if="errors.length">
            <p v-for="error in errors" v-bind:key="error"> {{ error }}</p>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-success"> Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from 'bulma-toast'

export default {
  name: "Login",
  data() {
    return {
      username: '',
      pwd: '',
      errors: [],
    }
  },
  methods: {
    async Login() {
      this.$store.commit('setIsLoading', true)
      this.errors = []
      axios.defaults.headers.common['Authorization'] = ''
      localStorage.removeItem('token')
      const formData = {
        username: this.username,
        password: this.pwd,
      }

      await axios.post('/api/v1/token/login/', formData).then(response => {
        const token = response.data.auth_token
        this.$store.commit('setToken', token);
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        localStorage.setItem('token', token)
        console.log("T", token)

      })
          .catch(error => {
            // console.log("Er", error.response)
            this.$store.commit('setIsLoading', false)
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(`${error.response.data[property]}`)
              }
            } else if (error.messages) {
              this.errors.push("Something went wrong. Please try again")
            }
          })
      this.$store.commit('setIsLoading', false)
      await axios.get('/api/v1/all_users/userinfo').then(response => {
        this.$store.commit('setUser', {
          'id': response.data.id,'username':response.data.username,
        })
        localStorage.setItem('userid', response.data.id)
        localStorage.setItem('username', response.data.username)

      })
    this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>