<template>
  <div id="home">
    <div class="left">
      <my-menu></my-menu>
    </div>
    <div class="right">
      <my-header></my-header>
    </div>
  </div>
</template>

<script>
import MyMenu from "../components/menu";
import MyHeader from "../components/header";
export default {
  name: "home",
  components: { MyMenu, MyHeader }
};
</script>
<style>
#home {
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
