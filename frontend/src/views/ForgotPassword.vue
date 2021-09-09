<template>
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title"> Reset Password </h1>
        <form @submit.prevent="resetPass" v-if="showForm">
          <div class="field">
            <label> Email </label>
            <div class="control">
              <input type="text" name="username" class="input" v-model="email">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-success"> Submit</button>
            </div>
          </div>
        </form>
        <p v-else> An e-mail has been sent for you to confirm the reset process. Click on the mail to finish resetting your password. </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: '',
      showForm: true,
    }
  },
  methods: {
    resetPass() {
      axios.post('/api/v1/users/reset_password/', {email: this.email}).then(response => {
        console.log("Email sent")
        this.showForm = false

      })
    }
  }
}
</script>

<style scoped>

</style>