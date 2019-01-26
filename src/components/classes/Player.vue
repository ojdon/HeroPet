<template>
 	<div v-show="currentQuest.inQuest === false" class="hero male idle"></div>
</template>

<script>
export default {
  name: 'Player',
  data () {
    return {
    	health: 100,
    	energy: 100,
    	hunger: 100,
      currentQuest: this.$store.getters.save.currentQuest
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
	transform: scale(8);
	width: 32px;
	height: 32px;
	position: absolute;
	top: 65vh;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
}

.hero.male {
	background: url(../../assets/img/player.png) left center;
}

.hero.male.idle {
	animation: idle 2s steps(10) infinite;
	animation-timing-function: ease-in-and-out;
	background-position-x: 0;
	background-position-y: 0;
}

@keyframes idle {
   100% { background-position-x: -320px; background-position-y: 0;}
}
</style>
