<template>
  <div class="home">
    <all-head></all-head>
    <my-date></my-date>
    <my-input></my-input>
  </div>
</template>

<script>
import MyDate from '../components/date'
import allHead from '../components/allHead'
import myInput from '../components/myInput'
export default {
  name: 'home',
  components: { allHead, MyDate, myInput }
}
</script>
<style>
</style>
