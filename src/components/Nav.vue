<template>
   <main class="">
    <main class=" p-2 pr-10 md:flex hidden justify-end items-center mx-auto flex-row gap-x-20 bg-teal-500">
    <div class=" uppercase pr-96 text-black text-xl flex  font-bold">Coder</div>
    <nav class=" bg-gradient-to-r from-black via-slate-900 to-black text-white   p-3 rounded-3xl">
    <router-link to="/">Home</router-link>  |
    <router-link to="/about">About</router-link>  |
    <router-link to="/services">services</router-link> |
    <router-link to="/login">Login</router-link>  |
    <router-link to="/contact">Contact us</router-link> 
  </nav>
   </main>
  <main class="relative">
    <button class="flex justify-end items-end top-1 right-1 p-4 fixed md:hidden  text-white " @click="toggleMenu = !toggleMenu">
     <!-- menu icon -->
      <svg
      
      v-if="!toggleMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 fill-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <!-- close icon -->
        <svg
        v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
    
    </button>
   <main v-show="toggleMenu"  class=" pl-4 p-2 pr-10 md:hidden flex  justify-end items-center mx-auto flex-col gap-x-20 bg-teal-500" >
    <div class=" uppercase md:pr-96 text-black text-xl flex  font-bold">Coder</div>
    <nav class="  flex flex-col justify-center gap-3 text-black items-center    p-3 rounded-3xl" >
    <router-link to="/">Home</router-link>  
    <router-link to="/about">About</router-link>  
    <router-link to="/services">services</router-link> 
    <router-link to="/login">Login</router-link>  
    <router-link to="/contact">Contact us</router-link> 
  </nav>
   </main>  
  </main>
    
   </main>
</template>

<script>
export default {
data(){
  return{
    toggleMenu:false
  }
}
}
</script>

<style >

</style>