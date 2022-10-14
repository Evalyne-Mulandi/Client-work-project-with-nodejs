<template>
  <main class="  p-24 min-h-screen bg-gradient-to-r from-cyan-200 via-teal-500 to-teal-900  ">
    <div class=" m-3   max-w-md justify-center items-center  mx-auto rounded-lg  ">
      
    <Form  @submit="onSubmit" :validation-schema="schema"  class=" rounded-lg  border border-white flex-col gap-y-2 bg-transparent flex justify-center items-center  py-4 max-auto">
      <img src="@/assets/user.png" alt="" class="  flex justify-center items-center mx-auto  rounded-full bg-white">
        <label  class=" m-3 uppercase font-mono font-extrabold">login</label>
        <Field name="Email" type="email" class=" px-10 py-2 rounded-md flex justify-center items-center gap-2 flex-col" placeholder="Enter your email"/>
      <ErrorMessage name="Email"  class="text-red-600"/>

      <Field name="password" type="password"  class="  px-10 py-2 rounded-md flex justify-center items-center gap-2 flex-col" placeholder="Enter your password"/>
      <ErrorMessage name="password"  class="text-red-600"/>
      <button class=" px-6 py-2 m-3  text-white   hover:bg-teal-900 bg-black rounded-md"> submit</button>
      
       <div class="">
        <input type="checkbox" class=" bg-indigo-700   m-1"><span>Remember me</span>
       </div>
       <div class=""> Don't have an account?<span><router-link to="/signup" class=" underline text-indigo-900">Signup</router-link></span></div>

       
    </Form>
  </div>
  </main>


        
 
<main/>
</template>

<script setup>   
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
 
   const schema = yup.object({
        Email: yup.string().required().email(),
        password: yup.string().required().min(8),
     
      });
function submit(values){
  console.log(values);  
}
</script>

<style>

</style>