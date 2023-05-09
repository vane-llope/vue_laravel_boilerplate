<template>
 <div class="container">
  <h1>Login</h1>
  <form v-on:keyup.enter="login">
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

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="form-check">
        <input class="form-check-input" v-model="user.remember" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <!-- Simple link -->
      <router-link :to="{name:'Register'}" >Don't Have An Account? Register</router-link>
    </div>
  </div>

  <!-- Submit button -->
  <button type="button" @click="login" class="btn btn-primary btn-block mb-4 w-100">Sign In</button>

</form>
</div>
</template>

<script>
import store from '../store'
export default {
  data(){
    return{
      user:{
        email:'',
        password:'',
      //  remember:false
      }
    }
  },
methods:{
  login(){
   store.dispatch('login',this.user)
      .then(()=>{this.$router.push({name:'Dashboard'})})
  }
}
}
</script>

<style>

</style>