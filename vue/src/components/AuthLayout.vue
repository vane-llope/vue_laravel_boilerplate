<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Wellcome {{user.name}}</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <router-link :to="{name:'Dashboard'}"  class="nav-link active" aria-current="page">Dashboard</router-link>
        </li>
           <li class="nav-item">
          <router-link :to="{name:'Surveys'}" class="nav-link">Surveys</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="logout" href="#">Logout</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
  <router-view></router-view>
</template>

<script>
import store from '../store';
export default {
  computed:{
user:()=>{return store.state.user.data}
},
methods:{
  logout(){
      store.dispatch('logout')
  .then(()=>{ this.$router.push({name:'Login'})})
  }
}
}
</script>

<style>

</style>