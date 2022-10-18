<template>
    <main class=" p-10  min-h-screen bg-gradient-to-r  from-teal-500 via-teal-700 to-teal-500 ">
        <h1 class=" flex justify-center items-center text-white  text-2xl p-2 font-mono font-extrabold underline">CONTENT WRITING</h1>
        <div class=" justify-center  gap-y-2 items-center flex flex-row flex-wrap p-2  "> 
    <div class="  transition-all duration-500 transform pt-1 hover:pb-1 hover:scale-105  flex m-1  border  flex-col justify-center items-center max-w-sm" v-for="write in writes" :key="write"> 
         
<h1 class=" text-xl font-bold text-white p-1 font-mono uppercase">{{write.title}}</h1>
<span class=" font-mono text-white">{{write.desc}} </span>
<button class="   gap-x-1 flex m-3 px-4 py-1 bg-gradient-to-r from-black via-teal-900 to-black rounded-full  text-white">  <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>Download </button>

    </div>
     
</div>
  </main>
  
</template>

<script>
 

export default {
data(){
 return{
    writes:[ 
        {
        title:"INTRODUCTION TO ACADEMIC WRITING",
        desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam eveniet  "
       },
       {
        title:" ESSAY WRITING",
        desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam eveniet   "
       },
       {
        title:" APA FORMAT",
        desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam eveniet   "
       },
       {
        title:" MLA FORMAT",
        desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam eveniet   "
       }, 
       {
        title:" HAZARD FORMAT",
        desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam eveniet   "
       }, 
       {
        title:" APA ESSAY FORMAT",
        desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam eveniet   "
       }, 
       {
        title:" MLA ESSAY FORMAT",
        desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam eveniet   "
       }, 
       {
        title:" HAZARD ESSAY FORMAT",
        desc:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam eveniet   "
       },  
]
 }

}
}
</script>

<style>

</style>