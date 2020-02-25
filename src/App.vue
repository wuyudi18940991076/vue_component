<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from './components/menu'
import MyHeader from './components/header'
export default {
  name: 'App',
  components: { MyMenu, MyHeader }
}
</script>
<style>

</style>
