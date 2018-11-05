<template>
  <div class="game">
    <p>Game Screen</p>
  </div>
</template>

<script>

import Player from '../classes/Player'
export default {
  name: 'Game',
  data () {
    return {
      msg: 'Game Screen'
    }
  },
  mounted() {
  	var player = new Player(100, 100, 100);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
