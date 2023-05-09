<template>
  <div class="container">
  <h1>register</h1>
  <form v-on:keyup.enter="register" >
   <!-- name input -->
  <div class="form-outline mb-4">
    <input type="text"   v-model="user.name" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Full Name</label>
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email"   v-model="user.email" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Email address</label>
  </div>

 <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="password"   v-model="user.password" id="form2Example3" class="form-control" />
    <label class="form-label" for="form2Example3">Password</label>
  </div>

  <!-- Password_confirmation input -->
  <div class="form-outline mb-4">
    <input type="password_confirmation"   v-model="user.password_confirmation" id="form2Example4" class="form-control" />
    <label class="form-label" for="form2Example4">Password Confirmation</label>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    
    <div class="col">
      <!-- Simple link -->
      <router-link :to="{name:'Login'}" >Already Have An Account?Loggin</router-link>
    </div>
  </div>

  <!-- Submit button -->
  <button type="button" @click="register" @keyup.enter="register" class="btn btn-primary btn-block mb-4 w-100">Sign Up</button>

</form>

</div>
</template>

<script>
import store from '../store';
export default {
data(){
  return{
    user:{
      name:'',
      email:'',
      password:'',
      password_confirmation:''
    }
  }
},
methods:{
  register(){
 store.dispatch('register',this.user)
  .then(()=>{this.$router.push({name:'Dashboard'})})
  }
}
}
</script>

<style>

</style>