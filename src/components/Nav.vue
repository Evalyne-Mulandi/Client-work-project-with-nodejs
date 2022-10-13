<template>
    <main class=" p-2 pr-10 md:flex hidden justify-end items-center mx-auto flex-row gap-x-20 bg-teal-500">
    <div class=" uppercase pr-96 text-black text-xl flex  font-bold">Coder</div>
    <nav class="flex justify-end items end  bg-black text-white  gap-x-4 p-3 px-4 rounded-3xl">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/services">services</router-link> |
    <router-link to="/team">Our Team</router-link>  |
    <router-link to="/contact">Contact us</router-link> 
    
  </nav>
   
   </main>
</template>

<script>
export default {

}
</script>

<style>

</style>