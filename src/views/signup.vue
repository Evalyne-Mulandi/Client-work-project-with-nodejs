<template>
  <main class="">
    <div class="  p-20 min-h-screen bg-gradient-to-r from-cyan-200 via-teal-500 to-teal-900">

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

      <Field name="Email" type="email" class=" p-2 px-10    rounded-md   "   required placeholder="Enter your email"/>
      <ErrorMessage name="Email"  class="text-red-600"/>

      <Field name="password" type="password"  class=" p-2 px-10   rounded-md " placeholder="Enter your password"/>
      <ErrorMessage name="password"  class="text-red-600"/>
      
      <button class=" rounded-lg px-6 py-2 p-4 gap-2 text-white hover:bg-teal-900 bg-black">Submit</button>
    </Form>
    </div>
  </main>

     




    
   

</template>

<script setup>   
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
 
   const schema = yup.object({
        Email: yup.string().required().email(),
        password: yup.string().required().min(8),
        phoneNumber: yup.number().required().min(10),
        lastName: yup.string().required(),
        firstName: yup.string().required()
      });
function submit(values){
  console.log(values);  
}


</script>

<style>

</style>