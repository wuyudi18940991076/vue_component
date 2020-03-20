<template>
  <div class="allheader">
    <div id="allheader">
      <div class="left">
        <my-menu></my-menu>
      </div>
      <div class="right">
        <my-header @kkkk="llal($event)">{{newNumber}}</my-header>
      </div>
    </div>
    {{newNumber}}
  </div>
</template>

<script>
import MyMenu from '../components/menu'
import MyHeader from '../components/header'
export default {
  name: 'allheader',
  components: { MyMenu, MyHeader },
  data () {
    return {
      newNumber: '父组件'
    }
  },
  methods: {
    llal (data1) {
      this.newNumber = data1
      console.log(11, data1)
    }
  }
}
</script>
<style>
#allheader {
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
