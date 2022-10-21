<template>
  <main class="">
    
    <div class="  p-20 min-h-screen bg-gradient-to-r from-cyan-200 via-teal-500 to-teal-900">
 
      <form @submit.prevent="onSubmit"   class="  md:border border-white mt-1 flex flex-col gap-y-2  mx-auto justify-center items-center max-w-lg
          bg-transparent text-black rounded-md">
          <img src="@/assets/user.png" alt="" class="  flex justify-center items-center mx-auto  rounded-full bg-white"> 
          <div class="flex justify-center items-center font-extrabold font-mono">
        SIGNUP   
      </div>
      <input  v-model="firstName" name="firstName" type="text" class=" p-2 px-10   rounded-md " required placeholder="Enter your first name"/>
      <span name="firstName" class="text-red-600" />

      <input  v-model="lastName" name="lastName" type="text"  class=" p-2 px-10   rounded-md " required placeholder="Enter your last name"/>
      <span name="lastName" class="text-red-600" />     

      <input  v-model="phoneNumber" name="phoneNumber" type="number" class=" p-2 px-10 rounded-md" required placeholder="Enter your phone number" />
      <span name="phoneNumber" class="text-red-600" />

      <input  v-model="email" name="Email" type="email" class=" p-2 px-10    rounded-md   " autocomplete   required placeholder="Enter your email"/>
      <span name="Email"  class="text-red-600"/>

      <input  v-model="password" name="password" type="password"  class=" p-2 px-10   rounded-md " autocomplete placeholder="Enter your password"/>
      <span name="password"  class="text-red-600" v-show="passErrorActivate">{{passwordError}}</span>  

      <input  v-model="confirmPassword" name=" confirmPassword" type="password"  class=" p-2 px-10   rounded-md " autocomplete placeholder="Confirm your password"/>
      <span name="password"  class="text-red-600" v-show="passErrorActivate">{{passwordError}}</span>
      <button class=" rounded-lg px-6 py-2 p-4 gap-2 text-white hover:bg-teal-900 bg-black" type="submit">Submit</button>
    </Form>
    </div>
  </main>
</template>

<script>   
export default{
  data(){
    return{
     firstName:"",
     lastName:"",
     phoneNumber:"",
     email:"",
     password:"",
     confirmPassword:"",
     passwordError:"password must be atleast 8 characters",
     passErrorActivate:false

    }
  },
  methods:{
    
    async onSubmit(){
      const pattern="^0(7(?:(?:[129][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$"
      let num="0768982944"
       const found = num.match(pattern);
    if(this.password.length<8 && this.confirmPassword.length<8){
      this.passErrorActivate=true
    }/* else if(found){
       alert("wrong phone number")
       console.log(found);
    } */
    else{
      let url="http://localhost:7000/signup/"
       let data=JSON.stringify({
        firstName: this. firstName,
                    lastName: this.lastName,
                    phoneNumber:this.phoneNumber,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
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
         this.$router.push("/login")
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