<template>
  <div class="loading" :style="{'position': cover ? 'fixed' : 'absolute'}">
    <div class="center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    props: ['cover']
  }
</script>

<style scoped>
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 1);
  }

  .center {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 32px;
    width: 32px;
  }
</style>
