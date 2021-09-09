<template>
  <div class="container">
  <h2> Hello and welcome {{user.username}}, you have successfully logged in. </h2>
  <button class="button is-info"  @click="changepass()"> Click here to change password</button>
    </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "MainPage",
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    changepass() {
    this.$router.push('changepass')
    }
  }


}
</script>

<style scoped>

</style>