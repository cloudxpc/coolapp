<template>
  <main class="bg-white">
    <div class="container py-5">
      <div class="row">
        <div class="col-md mb-4 mb-md-0">
          <div id="amap"></div>
        </div>
        <div class="col-md">
          <h3 class="mb-4" v-text="$eventBus.setting.brand"></h3>
          <p class="text-muted" v-text="'店面地址：' + $eventBus.setting.address"></p>
          <p class="text-muted" v-text="'固话：' + $eventBus.setting.tel"></p>
          <p class="text-muted" v-text="'手机：' + $eventBus.setting.mobile"></p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import AMap from 'AMap'

  export default {
    name: 'About',
    mounted() {
      const map = new AMap.Map('amap', {
        center: [117.142176,39.137726],
        zoom: 17
      });

      const marker = new AMap.Marker({
        position: new AMap.LngLat(117.142225,39.137568),
        title: this.$eventBus.setting.brand
      });

      map.add(marker);
    }
  }
</script>

<style scoped>
  #amap {
    width: 100%;
    height: 0;
    padding-bottom: 80%;
  }
</style>
