<template>
  <div id="app">
    <div class="appclass">
      <my-menu></my-menu>
      <my-header></my-header>
    </div>
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
.appclass {
  display: flex;
}
</style>
