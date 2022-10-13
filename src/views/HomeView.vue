<template>
  <div class="home">
   <Heros/> 
   <Function/>
    <Slider/>
  </div>
</template>

<script>
import Heros from '@/components/heros.vue';
import Function from '../components/function.vue';
import Slider from '../components/slider.vue';
 
// @ is an alias to /src
 

export default {
   
  components: {
    Heros,
    Function,
    Slider,
  
}
}
</script>
