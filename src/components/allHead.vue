<template>
  <div class="allHeader">
    <div class="left">
      <my-menu></my-menu>
    </div>
    <div class="right">
      <my-header></my-header>
    </div>
  </div>
</template>
<script>
import MyMenu from './menu'
import MyHeader from './header'
export default {
  name: 'allHeader',
  components: { MyMenu, MyHeader },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style>
.allHeader {
  display: flex;
}
.left {
  max-width: 280px;
}
.right {
  flex: 1;
  width: 0;
}
</style>
