<template>
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title"> Reset Password </h1>
        <form @submit.prevent="changePassword">
          <div class="field">
            <label>Enter New Password</label>
            <div class="control">
              <input type="password" name="pwd" class="input" v-model="pwd">
            </div>
          </div>
          <div class="field">
            <label>Re-enter Password </label>
            <div class="control">
              <input type="password" name="pwd" class="input" v-model="pwd1">
            </div>
          </div>
          <div class="notification is-danger" v-if="errors.length">
            <p v-for="error in errors" v-bind:key = "error"> {{error}}</p>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-success"> Change Password </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from "bulma-toast";

export default {
  name: "ForgotPasswordConfirm",
  mounted() {
    this.uid = this.$route.params.uid
    this.token = this.$route.params.token
  },
  data(){
    return{
      pwd:'',
      uid:'',
      token:'',
      pwd1:'',
      errors:[],
    }
  },
  methods:{
    changePassword(){
      this.errors = []
      const formData = {
        uid:this.uid,
        token:this.token,
        new_password: this.pwd,
        re_new_password:this.pwd1,
      }
      axios.post('/api/v1/users/reset_password_confirm/', formData).then(res => {
        toast({
            message: "Password Reset Successfully!",
            type: "is-success",
            dismissible:true,
            pauseOnHover:true,
            duration: 2000,
            position: 'top-right',
          })
        this.$router.push('/login')
      }).catch(error => {
        // console.log("Er", error.response)
          if(error.response){
            for(const property in error.response.data){
              this.errors.push(`${error.response.data[property]}`)
            }
          }
          else if(error.messages){
            this.errors.push("Something went wrong. Please try again")
          }
        })
    },
  }
}
</script>

<style scoped>

</style>