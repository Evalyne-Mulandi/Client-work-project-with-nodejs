<template>
  <main class="">
    <div v-show="cancel" class=" bg-indigo-600 h-12 rounded-md flex  text-white justify-center flex-row items-center mx-auto border-l-8 border-r-slate-800 max-w-md">
      {{success}}
      <button @click="this.cancel=!this.cancel" class=" bg-black text-slate-50 rounded-full h-5 w-5">X</button>
    </div>
    <div class="  p-20 min-h-screen bg-gradient-to-r from-cyan-200 via-teal-500 to-teal-900">
  <div>{{success}}</div>
      <Form @submit="onSubmit" :validation-schema="schema" class="  border border-white mt-1 flex flex-col gap-y-2  mx-auto justify-center items-center max-w-lg
          bg-transparent text-black rounded-md">
          <img src="@/assets/user.png" alt="" class="  flex justify-center items-center mx-auto  rounded-full bg-white"> 
          <div class="flex justify-center items-center font-extrabold font-mono">
        SIGNUP   
      </div>
      <Field name="firstName" type="text" class=" p-2 px-10   rounded-md " placeholder="Enter your first name"/>
      <ErrorMessage name="firstName" class="text-red-600" />

      <Field name="lastName" type="text"  class=" p-2 px-10   rounded-md " placeholder="Enter your last name"/>
      <ErrorMessage name="lastName" class="text-red-600"/>

      <Field name="phoneNumber" type="number" class=" p-2 px-10 rounded-md" placeholder="Enter your phone number" />
      <ErrorMessage name="phoneNumber" class="text-red-600" />

      <Field name="Email" type="email" class=" p-2 px-10    rounded-md   " autocomplete   required placeholder="Enter your email"/>
      <ErrorMessage name="Email"  class="text-red-600"/>

      <Field name="password" type="password"  class=" p-2 px-10   rounded-md " autocomplete placeholder="Enter your password"/>
      <ErrorMessage name="password"  class="text-red-600"/>
      
      <button class=" rounded-lg px-6 py-2 p-4 gap-2 text-white hover:bg-teal-900 bg-black">Submit</button>
    </Form>
    </div>
  </main>
</template>

<script setup>   
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import {ref } from 'vue'
let success=ref('');
let cancel=ref(false)
   const schema = yup.object({
        Email: yup.string().required().email(),
        password: yup.string().required().min(8),
        phoneNumber: yup.number().required().min(10),
        lastName: yup.string().required(),
        firstName: yup.string().required()
      });
 async function onSubmit(values){
  let url="http://localhost:5000/register"
    let data=JSON.stringify(values)
    let res= await fetch(url,{
      headers:{
        "Content-type":"application/json"
      },
      method:"POST",
      body:data
    })
    if(res.ok){
      let data=await res.json()
      cancel.value=true
      success=data.message;
      alert(success)
    }
    else{
      console.log("ERROR");
    }
    console.log(data);
}


</script>

<style>

</style>