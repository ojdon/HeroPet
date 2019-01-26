<template>
  <div id="app" class="bg bg-fields"><!-- 
    <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentTime: new Date()
    }
  },
  methods: {
    checkHours: function() {
      return this.currentTime.getHours();
    },
    setNight: function() {
      var bg = document.getElementById('app');
      bg = bg.classList.add("bg-night");
    }
  },
  mounted(){
    if(this.checkHours() >= 20 || this.checkHours() <= 8) {
      this.setNight();
    }
  }
}
</script>

<style>
header, .menu, .modal-content {
    background: #97714A !important;
    color: #FEFEFE;

}
.modal-header {
  border: none !important;
}
.disabled {
  cursor: not-allowed;
}
.btn-ui {
  background-image: url('./assets/img/ui/buttonLong_brown.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}


@font-face {
  font-family: m6x11;
  src: url(./assets/fonts/m6x11.ttf) format('truetype');
}
body {
  background: #44AAFF;

background: -moz-linear-gradient(top, #2299ee 0%, #7db9e8 100%); 
background: -webkit-linear-gradient(top, #2299ee 0%,#7db9e8 100%); 
background: linear-gradient(to bottom, #2299ee 0%,#7db9e8 100%);
  image-rendering: pixelated;
  overflow-y: hidden;
}


.bg {
  background-size: cover;
}
.bg-fields {
  background-image: url(./assets/img/bg/fields.png) !important;
}
.bg-fields.bg-night{
  background-image: url(./assets/img/bg/fields-night.png) !important;
}


#app {
  font-family: 'm6x11', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
