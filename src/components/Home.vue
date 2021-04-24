<template>
  <div class="main">
    


    <!--NAVIGATION-->
    <nav role = "navigation" class = "flex justify-between items-center h-16 bg-white text-white relative	">
      <a href="index.html" class = "pl-6 text-blue-600 font-bold	">City Name</a> 
      <div class="px-4 cursor-pointer md:hidden text-blue-400	" id="bars">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div class="hidden md:block" id="menu">
        <a href="index.html" id = "home" class="p-4 text-blue-400	hover:text-blue-500 duration-300">Home</a> 
        <a href="events.html" id = "events" class="p-4 text-blue-400	hover:text-blue-500 duration-300">Events</a> 
        <a href="contact.html" id = "contact" class="p-4 text-blue-400	hover:text-blue-500 duration-300">Hotels</a> 

      </div>
    </nav>    
    <script type="application/javascript" defer src="/scripts/burger.js"></script>


    <!--HERO-->
    <img>

    <div class = "bg-no-repeat h-screen bg-center bg-cover flex justify-center items-center  p-24" style="background-image: url('/images/city.jpeg');">
        <!--
        <h1 class="text-7xl text-white font-extrabold">{{ msg }}</h1>
        <p class="text-3xl text-white">eric cringe kid ngl</p>
        -->
        <div class="text-center font-bold">
          <h1 class="lg:text-9xl sm:text-6xl text-4xl mb-10 text-blue-600 hover:text-blue-500 duration-300">
            City Name
          </h1>
          <a href="" class="text-gray-700	 text-xl flex justify-center items-center transform hover:scale-110 duration-300">
            Explore<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
          </a>
        </div>
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
