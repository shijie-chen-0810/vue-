<template>
  <div>
    <div>index</div>
    <button @click="() => $router.push('/index')">indexgo</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>