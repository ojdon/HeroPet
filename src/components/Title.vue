<template>
  <div class="title">
    <h1 class="text-center my-5 py-5">HeroPet</h1>
    <b-container>

     <b-row>
      <b-col cols="4" offset="4">
        <b-button class="btn btn-ui" block=true size="lg" to="/game">New Game</b-button>
        <b-button class="btn btn-ui" block=true size="lg" href="">Exit Game</b-button>
      </b-col>
    </b-row>

  </b-container>
  
  
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
.menu-title a {
  font-size: 48px;
  text-decoration: none;
  margin: 2rem
}
</style>
