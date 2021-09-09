<template>
  <div class="hello">
    <h1>This is a basic authentication app created using VueJs and Django Rest Framework.</h1>
    <h2>The app takes care of the following:</h2>
    <ul>
      <li>Registration with activation email</li>
      <li>Login/logout with access token </li>
      <li>Forgot password and change password</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
