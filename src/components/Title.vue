<template>
  <div class="title">
    <h1 class="text-center">HeroPet</h1>
    <ul class="menu-title list-unstyled">
      <li><router-link to="/game">New Game</router-link></li>
      <li><a href="">Exit Game</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      msg: 'Title Screen'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  list-style: unstyled;
}
.menu-title a {
  font-size: 48px;
  text-decoration: none;
  margin: 2rem
}
</style>
