<template>
  <main class="  p-24 min-h-screen bg-gradient-to-r from-cyan-200 via-teal-500 to-teal-800  ">
    <div class=" m-3 md:max-w-md max-w-4xl justify-center items-center  mx-auto rounded-lg  ">
      
    <form  @submit.prevent="onSubmit"  class=" rounded-lg md:border border-white flex-col gap-y-2 bg-transparent flex justify-center items-center  py-4 mx-auto">
      <img src="@/assets/user.png" alt="" class="  flex justify-center items-center mx-auto  rounded-full bg-white">
        <label  class=" m-3 uppercase font-mono font-extrabold">login</label>

        <input  v-model="email" name="Email" type="email" class=" px-10 py-2 rounded-md flex justify-center items-center gap-2 flex-col" required placeholder="Enter your email"/>
      <span   name="Email"  class="text-red-600"/>

      <input v-model="password" name="password" type="password"  class="  px-10 py-2 rounded-md flex justify-center items-center gap-2 flex-col"  required placeholder="Enter your password"/>
      <span name="password"  class="text-red-600" v-show="passErrorActivate">{{passwordError}}</span>  
      <div class="">
        <input type="checkbox" class=" bg-indigo-700   h-4 w-4 m-1"><span>Remember me</span>
       </div>


      <button class=" px-6 py-2 m-3  text-white   hover:bg-teal-900 bg-black rounded-md"> submit</button>
      
       
       <div class=""> Don't have an account?<span><router-link to="/signup" class=" underline text-white">Signup</router-link></span></div>

       
    </form>
  </div>
  </main>


        
<main/>
</template>

<script>   
export default{
  data(){
    return{
      
     email:"",
     password:"",
     confirmPassword:"",
     passwordError:"password must be atleast 8 characters",
     passErrorActivate:false

    }
  },
  methods:{
    
    async onSubmit(){
     
    if(this.password.length<8 && this.confirmPassword.length<8){
      this.passErrorActivate=true
    }
    else{
      /* let url="http://localhost:7000/login/" */
      let url="api/v1/login/"
       let data=JSON.stringify({
       
                    email: this.email,
                    password: this.password,
                   
       })
       let res= await fetch(url,{
         headers:{
           "Content-type":"application/json"
         },
         method:"POST",
         body:data
       })
       if(res.ok){
         let data=await res.json()
         console.log(data);
         alert(data.message)
         this.$router.push("/services")
       }
       else{
         let data=await res.json()
         console.log(data)
         alert(data.message)
       }
    }
      
   }
  }
}


</script>


<style>

</style>