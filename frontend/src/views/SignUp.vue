<template>

  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title"> Sign Up</h1>
        <form @submit.prevent="signUp" v-if="showForm">
          <div class="field">
            <label> Email </label>
            <div class="control">
              <input type="email" name="email" class="input" v-model="email">
            </div>
          </div>

          <div class="field">
            <label> Username </label>
            <div class="control">
              <input type="text" name="username" class="input" v-model="username">
            </div>
          </div>

          <div class="field">
            <label> Password </label>
            <div class="control">
              <input type="password" name="pwd1" class="input" v-model="pwd1">
            </div>
          </div>

          <div class="field">
            <label> Password Again </label>
            <div class="control">
              <input type="password" name="pwd2" class="input" v-model="pwd2">
            </div>
          </div>

          <div class="notification is-danger" v-if="errors.length">
            <p v-for="(error, index) in errors" v-bind:key="index"> {{ error }}</p>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-success"> Sign Up</button>
            </div>
          </div>
        </form>
        <p v-else> We have sent you an activation link on your mail. Please click on the link to complete your
          registration! Thank you :)</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from 'bulma-toast'

export default {
  name: "SignUp",
  data() {
    return {
      email: '',
      username: '',
      pwd1: '',
      pwd2: '',
      errors: [],
      showForm: true,
    }
  },
  methods: {
    async signUp() {
      this.$store.commit('setIsLoading', true)
      this.errors = []
      if (this.username == '') {
        this.errors.push("The username is missing")
      }
      if (this.pwd1 == '') {
        this.errors.push("Password is empty")
      }
      if (this.pwd1 != this.pwd2) {
        this.errors.push("Passwords don't match")
      }

      if (!this.errors.length) {

        const formData = {
          email: this.email,
          username: this.username,
          password: this.pwd1,
        }
        // console.log("No errors", formData)
        await axios.post('/api/v1/users/', formData).then(response => {
          this.showForm = false
          toast({
            message: "Account is created!",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'top-right',
          })

          // this.$router.push('/login')
        })
            .catch(error => {
              this.$store.commit('setIsLoading', false)
              // console.log("Er", error.response)
              if (error.response) {
                for (const property in error.response.data) {
                  this.errors.push(`${error.response.data[property]}`)
                }
              } else if (error.messages) {
                this.errors.push("Something went wrong. Please try again")
              }
            })
      }
      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>

<style scoped>

</style>