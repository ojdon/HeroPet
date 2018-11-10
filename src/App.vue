<template>
  <div id="app" class="bg bg-fields"><!-- 
    <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

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
/* .ground {
  position: fixed;
  bottom: 0;
  height: 55vh;
  left: 0;
  right: 0;
  background: #2B4;
  background: #a9db80;
background: -moz-radial-gradient(center, ellipse cover, #a9db80 0%, #96c56f 100%);
background: -webkit-radial-gradient(center, ellipse cover, #a9db80 0%,#96c56f 100%);
background: radial-gradient(ellipse at center, #a9db80 0%,#96c56f 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a9db80', endColorstr='#96c56f',GradientType=1 );
  z-index:-1;
  border-top: 1px solid #99db70
} */

.bg {
  background-size: cover;
}
.bg-fields {
  background-image: url(./assets/img/bg/fields.png) !important;
}
.bg-fields.night{
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
