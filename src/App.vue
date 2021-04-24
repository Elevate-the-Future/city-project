<template>
<!-- home(index.html) -->
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    


    <!--vue for image here?-->
    <HelloWorld msg="test"/>
    <!--<img alt="Hero Image" src="./assets/images/cupertino.jpg">-->
  </div>
</template>

<script>
import HelloWorld from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}


</script>

<style>
@import('./assets/tailwind.css')
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
