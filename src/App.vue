<template>
   <main class=" relative z-10">
    <Nav/>
   
  <router-view/>
 
  <Footer/>
  
   </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 text-align: center;
  color: #2c3e50;
}

</style>
   <script>
import Nav from './components/Nav.vue'
import Footer from './components/footer.vue';

   export default {
  components: { Nav, Footer },
    
   }
   </script>
 