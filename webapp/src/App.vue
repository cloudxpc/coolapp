<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import HeaderBar from "./components/common/HeaderBar";
  import FooterBar from "./components/common/FooterBar";

  export default {
    name: 'App',
    components: {FooterBar, HeaderBar}
  }
</script>

<style>

</style>
