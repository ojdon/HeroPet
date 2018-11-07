<template>
	
  <div class="game">
  	<header>
  		<b-container fluid>
        <b-row>
        <b-col><p class="text-center mb-0">Health: 100/100</p><span class="health" style="width: 100%;"></span></b-col>
        <b-col><p class="text-center mb-0">Magic: 100/100</p><span class="magic" style="width: 100%;"></span></b-col>
        <b-col><p class="text-center mb-0">Hunger: 100/100</p><span class="hunger" style="width: 100%;"></span></b-col>
      </b-row>
      </b-container>
  	</header>

    <footer class="position-absolute">
        <b-btn class="text-center mx-auto" size="lg" v-b-modal.menu>Menu</b-btn>
    </footer>


    <!-- TODO: PUT THIS IN A SEPERATE COMPONENT !-->
    <b-modal id="menu" centered hide-footer=true size="lg" title="Menu">
    <b-container>
      <b-row>
        <b-col>
          <b-btn size="lg" block=true>
          Quest
        </b-btn>
        </b-col>

        <b-col>
          <b-btn size="lg" block=true>
            Train
          </b-btn>
        </b-col>

        <b-col>
          <b-btn size="lg" block=true>
            Status
          </b-btn>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col>
          <b-btn size="lg" block=true>
          Heal
        </b-btn>
        </b-col>
        <b-col>
          <b-btn size="lg" block=true>
          Potion
        </b-btn>
        </b-col>
        <b-col>
          <b-btn size="lg" block=true>
          Eat
        </b-btn>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
  
  </div>
</template>

<script>

import Player from '../classes/Player'
export default {
  name: 'Game',
  data () {
    return {
    	player: new Player(100, 100, 100),
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

header .magic {
	background: url('../assets/img/ui/barBlue_horizontalBlue.png');
	display: inline-block;
	height: 18px;
  margin-bottom: 1px;
}
header .magic::before {
  background: url('../assets/img/ui/barBlue_horizontalLeft.png') no-repeat;
  content: '';
  z-index:1;
  bottom: 9px;
  left: 9px;
  width: 9px;
  height: 18px;
  position:absolute;

}
header .magic::after {
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
footer {
  bottom: 48px;
  left: 0;
  right: 0;
  z-index:1;
}

</style>
