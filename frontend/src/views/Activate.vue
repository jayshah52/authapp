<template>
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h3> You have successfully registered! Congratulations!</h3>
        <h3> Please Login to continue</h3>
        <button class="button is-success" @click="Login"> Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from "bulma-toast";

export default {
  name: "Activate",
  data() {
    return {
      uid: '',
      token: '',
    }
  },
  mounted() {
    this.uid = this.$route.params.uid
    this.token = this.$route.params.token
    const formData = {
      uid: this.uid,
      token: this.token
    }
    axios.post('/api/v1/users/activation/', formData).then(res => {
      toast({
        message: "Account Created Successfully! Please login to continue.",
        type: "is-success",
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: 'top-right',
      })
    })
  },
  methods: {
    Login() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>