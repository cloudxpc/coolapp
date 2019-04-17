<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view/>
    <footer-bar></footer-bar>
    <loading cover="true" v-if="isLoading"></loading>
  </div>
</template>

<script>
  import HeaderBar from "./components/common/HeaderBar";
  import FooterBar from "./components/common/FooterBar";
  import Loading from "./components/common/Loading";

  export default {
    name: 'App',
    data: function(){
      return {
        isLoading: false
      };
    },
    components: {Loading, FooterBar, HeaderBar},
    created() {
      this.isLoading = true;
      this.$axios.get('https://cloudxpc.github.io/coolapp/webapp/data.json').then(response => {
        this.$eventBus.setting = response.data;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
      });
    }
  }
</script>
