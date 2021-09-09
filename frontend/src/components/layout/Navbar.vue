<template>
  <b-container-fluid>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
                <router-link to="/" style="color: white">
                  Auth App
                </router-link>
<!--        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbWOPiQodJzzzkUso75tWzYzDfGtm1semVDj61Y8c6rvRcBybeskYOWXNQgwfJfMC9m4&usqp=CAU">-->
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <template v-if="isLoggedin">
            <b-nav-item>
              <button class="button is-danger" @click="logout()"> Logout</button>
            </b-nav-item>

          </template>
          <template v-if="!isLoggedin">
            <b-nav-item>
              <router-link to="/sign-up" class="button is-success">Sign Up</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/login" class="button is-light">Log In</router-link>
            </b-nav-item>
          </template>


        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </b-container-fluid>

</template>
<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "Navbar",
  data(){
    return{
      isLoggedin: false
    }
  },
  watch:{
    $route(){
      if(localStorage.getItem('token')){
      this.isLoggedin = true
    }
    else{
      this.isLoggedin = false
    }
    }
  },
  mounted() {
    console.log("HEllo", localStorage.getItem('username'))
    if(localStorage.getItem('token')){
      this.isLoggedin = true
    }
    else{
      this.isLoggedin = false
    }
    console.log(this.isLoggedin)
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    addJob() {
      this.$router.push('/jobs/add-jobs')
    },
    async logout() {
      this.$store.commit('setIsLoading', true)
      await axios.post('/api/v1/token/logout/').then(response => {
        localStorage.removeItem('token')
        this.isLoggedin = false
        this.$router.push('/login')

      })
          .catch(error => {
            console.log(JSON.stringify(error))
          })
      // axios.defaults.headers.common['Authorization'] = null;
      this.$store.commit('setIsLoading', false)
      localStorage.removeItem('username')
      localStorage.removeItem('userid')
      localStorage.removeItem('is_coordinator')

      this.$store.commit('removeToken')
    }
  }
}
</script>

<style scoped>

</style>
