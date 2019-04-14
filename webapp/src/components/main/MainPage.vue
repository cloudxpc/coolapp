<template>
  <main>
    <carousel></carousel>
    <card-area></card-area>
    <ad-area></ad-area>
    <p>this is ithi is </p>
  </main>
</template>

<script>
  import Carousel from "./Carousel";
  import CardArea from "./CardArea";
  import AdArea from "./AdArea";
  export default {
    name: 'MainPage',
    components: {AdArea, CardArea, Carousel}
  }
</script>
