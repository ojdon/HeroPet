<template>
	
  <div class="game">
  	<header>
  		<b-container fluid>
        <b-row>
        <b-col class="position-relative">
          <p class="text-center mx-auto mb-0 position-absolute text-header py-2">Health: <span class="d-block d-sm-inline">{{healthCount}}/100</span></p>
          <p class="text-left py-2 m-0 position-relative">
            <span class="health position-absolute" v-bind:style="{ width: healthCount + '%' }"></span>

          <span class="empty position-absolute"></span></p>
        </b-col>
        <b-col>
          <p class="text-center mx-auto mb-0 position-absolute text-header py-2">Energy: <span class="d-block d-sm-inline">{{energyCount}}/100</span></p>
          <p class="text-left py-2 m-0 position-relative">
            <span class="energy position-absolute" v-bind:style="{ width: energyCount + '%' }"></span>
          <span class="empty position-absolute"></span>
        </p>
        </b-col>
        <b-col>
          <p class="text-center mx-auto mb-0 position-absolute text-header py-2">Hunger: <span class="d-block d-sm-inline">{{hungerCount}}/100</span></p>
          <p class="text-left py-2 m-0 position-relative">
            <span class="hunger position-absolute" v-bind:style="{ width: hungerCount + '%' }"></span>

          <span class="empty position-absolute"></span>
        </p>
          </b-col>
      </b-row>
      </b-container>
  	</header>

    <Player></Player>

    <footer class="position-absolute">
        <b-btn class="text-center mx-auto btn-menu" size="lg" v-b-modal.menu>Menu</b-btn>
    </footer>

    <Menu></Menu>
    
    <MenuQuest></MenuQuest>
  
    <audio  autoplay loop>
      <source src="../assets/snd/music/game.mp3" type="audio/mp3">
    </audio>
  
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
      msg: 'Game Screen',
      player: Player,
      hero: this.$store.getters.save.hero
    }
  },
  computed: {
  healthCount () {
      return this.$store.getters.save.hero.health
    },
    energyCount() {
      return this.$store.getters.save.hero.energy
    },
    hungerCount() {
      return this.$store.getters.save.hero.hunger
    },
  },
  methods: {
    init: function () {
      localStorage.setItem('save', true);
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header .health {
	background: url('../assets/img/ui/barRed_horizontalMid.png') repeat-x;
	display: inline-block;
	height: 18px;
  position:relative;
  margin-left: 9px;
  margin-right:9px;
  z-index:1;
}
header .health::before {
  background: url('../assets/img/ui/barRed_horizontalLeft.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 0;
  left: -9px;
  right: -9px;
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
  z-index:1;

}
header .energy::before {
  background: url('../assets/img/ui/barBlue_horizontalLeft.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 0;
  left: -9px;
  right: -9px;
  width: 9px;
  height: 18px;
  position:absolute;

}
header .energy::after {
  background: url('../assets/img/ui/barBlue_horizontalRight.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 0;
  right: -9px;
  width: 9px;
  height: 18px;
  position:absolute;
}
header .empty {
	background: url('../assets/img/ui/barBack_horizontalMid.png');
	display: inline-block;
	height: 18px;
  margin-bottom: 1px;
  width: 100%;
  z-index: 0;
}
header .empty::before {
  background: url('../assets/img/ui/barBack_horizontalLeft.png') no-repeat;
  content: '';
  z-index:0;
  bottom: 0;
  left: -9px;
  right: -9px;
  width: 9px;
  height: 18px;
  position:absolute;

}
header .empty::after {
  background: url('../assets/img/ui/barBack_horizontalRight.png') no-repeat;
  content: '';
  z-index:0;
  bottom: 0;
  right: -9px;
  width: 9px;
  height: 18px;
  position:absolute;

}

header .hunger {
	background: url('../assets/img/ui/barGreen_horizontalMid.png');
	display: inline-block;
	height: 18px;
  margin-bottom: 1px;
  z-index:1;
}
header .hunger::before {
  background: url('../assets/img/ui/barGreen_horizontalLeft.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 0;
  left: -9px;
  right: -9px;
  width: 9px;
  height: 18px;
  position:absolute;

}
header .hunger::after {
  background: url('../assets/img/ui/barGreen_horizontalRight.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 0;
  right: -9px;
  width: 9px;
  height: 18px;
  position:absolute;
}
.text-header {
  z-index: 3;
  left: 0;
  right: 0;
}
.btn-menu {
  background: url(../assets/img/ui/buttonSquare_brown.png) no-repeat;
  background-size: 100% 100%
}
header, .menu, .modal-content {
    background: #97714A !important;
    color: #FEFEFE;

}
.modal-header {
  border: none !important;
}
footer {
  bottom: 48px;
  left: 0;
  right: 0;
  z-index:1;
}

</style>
