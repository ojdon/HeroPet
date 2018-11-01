<template>
  <div id="app"><!-- 
    <img src="./assets/logo.png"> -->
    <router-view/>
    <div class="ground"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@font-face {
  font-family: m6x11;
  src: url(./assets/fonts/m6x11.ttf) format('truetype');
}
body {
  font-size:1rem;
  padding: 0;
  margin: 0;

  background: #44AAFF;
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
.ground {
  position: fixed;
  bottom: 0;
  height: 10vh;
  left: 0;
  right: 0;
  background: #2B4;
}
#app {
  font-family: 'm6x11', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
}
</style>
