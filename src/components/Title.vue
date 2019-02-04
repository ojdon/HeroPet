<template>
  <div class="title">
    <h1 class="text-center my-0 py-5">HeroPet</h1>
    <b-container>

     <b-row>
      <b-col cols="4" offset="4" class="my-5">
        <b-button class="btn btn-ui" block=true size="lg" :to="{name: 'Game', params: {new: true}}" >New Game</b-button>

        <b-button v-show="save" class="btn btn-ui" block=true size="lg" to="/game">Continue Game</b-button>
        <b-button class="btn btn-ui" block=true size="lg" href="">Exit Game</b-button>
      </b-col>
    </b-row>

  </b-container>

  <audio  autoplay loop>
    <source src="../assets/snd/music/title.mp3" type="audio/mp3">
  </audio>
  
  
</div>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      msg: 'Title Screen',
      save: false
    }
  },
  mounted() { 
    if(localStorage.getItem('save')) {
      this.save = localStorage.getItem('save');
    }
    console.log(this.$router);
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.from);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  animation: aniTitle 3s infinite;
  transform: translateY(0)
}

@keyframes aniTitle {
  0% {
    transform: translateY(0px)
  }
  24% {
    transform: translateY(0px)
  }
  25% {
    transform: translateY(1px)
  }
  26% {
    transform: translateY(2px)
  }
  49% {
    transform: translateY(2px)
  }
  50% {
    transform: translateY(1px)
  }
  51% {
    transform: translateY(1px)
  }
  
  74% {
    transform: translateY(1px)
  }
  75% {
    transform: translateY(0)
  }
  76% {
    transform: translateY(-1px)
  }
  99% {
    transform: translateY(-2px)
  }
  100% {
    transform: translateY(0px)
  }
}
h1 {

font-family: m6x11;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: 10rem;
color: #FEFEFE;
  -webkit-text-fill-color: #FEFEFE; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: black;
  letter-spacing: -10px;

}
.menu-title a {
  font-size: 48px;
  text-decoration: none;
  margin: 2rem
}
</style>
