<template>
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title"> Change Password </h1>
        <form @submit.prevent="changePassword">

          <div class="field">
            <label> Current Password </label>
            <div class="control">
              <input type="password" name="pwd" class="input" v-model="cpwd">
            </div>
          </div>
          <div class="field">
            <label> New Password </label>
            <div class="control">
              <input type="password" name="pwd" class="input" v-model="pwd">
            </div>
          </div>
          <div class="notification is-danger" v-if="errors.length">
            <p v-for="error in errors" v-bind:key="error"> {{ error }}</p>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-success">Change</button>
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
  name: "ChangePassword",
  data() {
    return {
      cpwd: '',
      pwd: '',
      errors: [],
    }
  },
  methods: {
    changePassword() {
      const formData = {
        new_password: this.pwd,
        current_password: this.cpwd,
      }
      axios.post('/api/v1/users/set_password/', formData).then(response => {
        toast({
          message: "Password Changed Successfully",
          type: "is-success",
          dismissible: true,
          pauseOnHover: true,
          duration: 2000,
          position: 'top-right',
        })
        this.$router.push('/home')
      }).catch(error => {
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
  }
}
</script>

<style scoped>

</style>