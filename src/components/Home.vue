<template>
  <div class="main">
    
    <!--NAVIGATION-->
    <nav role = "navigation" class = "flex justify-between items-center h-16 bg-gradient-to-r from-blue-800 to-blue-700 text-white relative	">
      <a href="index.html" class = "pl-6">Cupertino</a> 
      <div class="px-4 cursor-pointer md:hidden" id="bars">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div class="hidden md:block" id="menu">
        <a href="index.html" class="p-4">Home</a> 
        <a href="events.html" class="p-4">Events</a> 
        <a href="contact.html" class="p-4">Hotels</a> 

      </div>
    </nav>    
    
    <!--HERO-->
    <img src = "../assets/images/cupertino.jpg">

    <div class = "bg-no-repeat h-screen bg-center bg-cover center" style="background-image: url('../assets/images/cupertino.jpg');">
        <h1>{{ msg }}</h1>

    </div>


    <!--<div class = "bg-no-repeat h-screen bg-center bg-cover center bg-hero-image">

      <h1>{{ msg }}</h1>
    </div>-->

    

  </div>
  

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
