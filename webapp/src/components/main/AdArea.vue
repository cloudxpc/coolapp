<template>
  <div class="container">
    <div class="ad border rounded shadow-sm p-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdArea'
  }
</script>

<style scoped>
  .ad {
    height: 150px;
    background: linear-gradient(150deg, #97c74e, #2ab9a5);
    color: #ffffff;
    position: relative;
  }

  .ad:before{
    content: "";
    background-image: url("https://wizixo.webestica.com/assets/images/bg/pattern/03.png");
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
</style>
