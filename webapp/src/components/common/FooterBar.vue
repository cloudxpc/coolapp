<template>
  <footer class="footer py-3 bg-color text-light">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-4 mb-md-0">
          <p class="mb-0 text-center"><small v-text="'店面地址：' + $eventBus.setting.address"></small></p>
          <p class="mb-0 text-center"><small v-text="'固话：' + $eventBus.setting.tel"></small></p>
          <p class="mb-0 text-center"><small v-text="'手机：' + $eventBus.setting.mobile"></small></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterBar'
  }
</script>

<style scoped>
  .footer {
    box-shadow: 0 10px 10px rgba(0, 0, 0, .3) inset;
  }
</style>
