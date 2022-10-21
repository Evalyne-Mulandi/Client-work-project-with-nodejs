<template>
  <main class="p-10 min-h-screen bg-gradient-to-r   from-cyan-200 via-teal-500 to-teal-800">
    <h1 class="  text-2xl font-extrabold text-black"> WEB DEVELOPMENT TUTORIALS</h1>
    <div class=" m-5  max-w-5xl text-black flex justify-center items-center mx-auto text-wrap">  <p class="text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga nam in doloribus aperiam dolores molestiae atque vitae, aliquid aspernatur dignissimos dolore.
       Rem eos, exercitationem necessitatibus doloribus laboriosam corrupti quas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis inventore quas veniam iusto id facilis iste incidunt sequi. 
      Quod reiciendis ipsum ipsa aliquam repellat pariatur asperiores aut rerum libero!</p></div>
    
<div class=" mx-auto flex-row flex-wrap flex  justify-center items-center">
  <div  class=" justify-center  gap-y-2 items-center  p-2 " v-for="vidId in videos" :key="vidId.id">
    <iframe width="400" height="300" :src="`https://www.youtube.com/embed/${vidId.videoId}`" title="Vue JS 3 Tutorial for Beginners #1 - Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

 
  </main>
</template>

<script>
export default {
 data(){
  return{ 
 videos:[
  {id:1,videoId:"YrxBCBibVo0?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1"},
  {id:2,videoId:"F7PLPJqVotk?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1"},
  {id:3,videoId: "CYPZBK8zUik?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1"},
  {id:4,videoId: "GWRvrSqnFbM?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1"},
  {id:5,videoId: "KM1U6DqZf8M?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1"},
  {id:6,videoId:  "bc6czIBLKTg?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1"},
  {id:7,videoId:  "ixOcve5PX-Q?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1" },
  {id:8,videoId:  "juocv4AtrHo?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1"},
  {id:9,videoId:  " 7iDGJolHFmU?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1"},
  {id:10,videoId: " V-kxBWcPJfo?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1"},
  {id:11,videoId: " 0FwBjPeLqQ8?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1" },
  {id:12,videoId: " Dj_2j-IKXuo?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1"}
 ]
  }
 }
}
</script>

<style>

</style>