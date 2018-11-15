<template>
	
  <div class="game">
  	<header>
  		<b-container fluid>
        <b-row>
        <b-col><p class="text-center mb-0">Health: <span class="d-block d-sm-inline">100/100</span></p><span class="health" style="width: 100%;"></span></b-col>
        <b-col><p class="text-center mb-0">Energy: <span class="d-block d-sm-inline">100/100</span></p><span class="energy" style="width: 100%;"></span></b-col>
        <b-col><p class="text-center mb-0">Hunger: <span class="d-block d-sm-inline">100/100</span></p><span class="hunger" style="width: 100%;"></span></b-col>
      </b-row>
      </b-container>
  	</header>

    <Player></Player>

    <footer class="position-absolute">
        <b-btn class="text-center mx-auto btn-menu" size="lg" v-b-modal.menu>Menu</b-btn>
    </footer>

    <Menu></Menu>
    
<MenuQuest></MenuQuest>
  
  
  </div>
</template>

<script>
import Menu from './includes/menu.vue'
import MenuQuest from './includes/menu-quest.vue'
import Player from './classes/Player.vue'
export default {
  name: 'Game',
  components: {
    Menu,
    MenuQuest,
    Player
  },
  data () {
    return {
      msg: 'Game Screen'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
    background: #97714A;
    color: #FEFEFE;

}

header .health {
	background: url('../assets/img/ui/barRed_horizontalMid.png') repeat-x;
	display: inline-block;
	height: 18px;
  position:relative;
  margin-left: 9px;
  margin-right:9px;
}
header .health::before {
  background: url('../assets/img/ui/barRed_horizontalLeft.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 0;
  left: -9px;
  width: 9px;
  height: 18px;
  position:absolute;

}
header .health::after {
  background: url('../assets/img/ui/barRed_horizontalRight.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 0;
  right: -9px;
  width: 9px;
  height: 18px;
  position:absolute;
}

header .energy {
	background: url('../assets/img/ui/barBlue_horizontalBlue.png');
	display: inline-block;
	height: 18px;
  margin-bottom: 1px;
}
header .energy::before {
  background: url('../assets/img/ui/barBlue_horizontalLeft.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 9px;
  left: 9px;
  width: 9px;
  height: 18px;
  position:absolute;

}
header .energy::after {
  background: url('../assets/img/ui/barBlue_horizontalRight.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 9px;
  right: 9px;
  width: 9px;
  height: 18px;
  position:absolute;
}

header .hunger {
		background: url('../assets/img/ui/barGreen_horizontalMid.png');
		display: inline-block;
		height: 18px;
    margin-bottom: 1px;
}
header .hunger::before {
  background: url('../assets/img/ui/barGreen_horizontalLeft.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 9px;
  left: 9px;
  width: 9px;
  height: 18px;
  position:absolute;

}
header .hunger::after {
  background: url('../assets/img/ui/barGreen_horizontalRight.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 9px;
  right: 9px;
  width: 9px;
  height: 18px;
  position:absolute;
}
.btn-menu {
  background: url(../assets/img/ui/buttonSquare_brown.png) no-repeat;
  background-size: 100% 100%
}
footer {
  bottom: 48px;
  left: 0;
  right: 0;
  z-index:1;
}

</style>
