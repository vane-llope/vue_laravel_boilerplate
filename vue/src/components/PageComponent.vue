<template>
  <div>
  <h1>{{title}}</h1>
  <slot></slot>
  </div>
</template>

<script>
export default {
props:{
    title:String
}
}
</script>

<style>

</style>