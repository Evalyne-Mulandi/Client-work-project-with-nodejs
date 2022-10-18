<template>
  <main class=" p-10  bg-gradient-to-r from-teal-300 via-teal-500 to-teal-300  min-h-screen   "> 
    <div class="p-10 text-black text-5xl font-extrabold flex justify-center items-center">Find us & say hello...</div>
    <div class="flex justify-center items-center  gap-x-48  md:flex-row flex-col 
  ">
  <div class="  justify-center   items-center flex flex-col gap-y-7  flex-wrap p-2  max-w-md ">  
    <p class="   ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nesciunt quisquam necessitatibus optio voluptatem eveniet reiciendis quibusdam deleniti quidem! Accusantium, tempore voluptati</p>
    <div class="    w-3/5  flex-col">
 
 <h1 class=" text-2xl   font-bold  text-black  font-mono ">Address</h1>
 <span class="    text-black font-mono" >Nairobi,kenya</span> 
 </div>
 
 <div class="   flex-col">
   
 <h1 class=" text-2xl  font-bold   text-black  font-mono ">Phone</h1>
 <span class="    text-black font-mono" >+254757733263</span> 
 </div>
 
 <div class="  flex-col">
  
 <h1 class="    text-2xl font-bold  text-black  font-mono ">Email</h1>
 <span class="    text-black font-mono" >eva.nthenya.mulandi@gmail.com</span> 
 </div>
  </div>
      <div class=" pt-9   w-2/5  max-w-3xl flex flex-col" > 
         
        <Form @submit="sendMessage" :validation-schema="schema" class="  rounded-md   gap-2  flex  flex-col max-w-3xl  "> 
<Field name="fullName" type="fullname" placeholder="fullname" class=" rounded-md py-3 border-none px-3"/>
  <ErrorMessage name="fullName"  class=" text-red-600"/>
  <Field name="email" type="email" required placeholder="email" class=" rounded-md py-3 border-none px-3"/>
  <ErrorMessage name="email"  class=" text-red-600" />
  <Field name="subject" type="subject" placeholder="subject" class=" rounded-md py-3 border-none px-3"/>
  <ErrorMessage name="subject"   class=" text-red-600"/>

<textarea name="description" id="description" type="description" cols="10" rows="7" placeholder=" description" class="  rounded-md border-none "></textarea>
<ErrorMessage name="description"   class=" text-red-600"/>
<button class="rounded-md  dark:bg-slate-800 bg-black hover:bg-teal-900   py-2 flex-row flex justify-center  items-center w-36 mx-auto  text-white "><a href="mailto:eva.nthenya.mulandi@gmail.com">Send message</a></button>
</Form>
           </div>
      
       
  </div>
      
      
<!-- 
<div class=" flex justify-center items-center p-10 ">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.801278217325!2d35.962801314454005!3d-0.167464635475366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829f6f367bba6d9%3A0x363c14244dccdde!2sKabarak%20university!5e0!3m2!1sen!2ske!4v1665070492855!5m2!1sen!2ske" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div> -->

 
</main>


</template>

<script setup>
import Footer from '@/components/footer.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';
import * as yup from 'yup';
 components: { Footer }
const schema = yup.object({
fullName: yup.string().required().min(3),
email: yup.string().required().email(),
password: yup.string().required().min(8),
subject: yup.string().required().min(8),
description: yup.string().min(8),
});
function sendMessage(){
  console.log("loggg");
}

 
</script>

<style>

</style> -->