<template>
  <main class="bg-white">
    <carousel></carousel>
    <div class="space"></div>
    <intro-area src="https://wizixo.webestica.com/assets/images/portfolio/05.jpg">
      <h1 class="mb-4">标题标题</h1>
      <p class="text-muted">段落文字段落文字段落文字</p>
      <p class="text-muted">段落文字段落文字段落文字段落文字</p>
      <p class="text-muted">段落文字段落文字</p>
      <button type="button" class="cool-btn">联系我们</button>
    </intro-area>
    <div class="space"></div>
    <div class="bg-light">
      <div class="container py-5">
        <h1 class="text-center text-dark mb-4">标题标题</h1>
        <p class="text-center text-muted">段落文字段落文字段落文字</p>
        <p class="text-center text-muted">段落文字段落文字段落文字段落文字</p>
        <p class="text-center text-muted">段落文字段落文字</p>
      </div>
    </div>
    <div class="space"></div>
    <intro-area right="true" src="https://wizixo.webestica.com/assets/images/portfolio/06.jpg">
      <h1 class="mb-4 align">标题标题</h1>
      <p class="text-muted">段落文字段落文字段落文字</p>
      <p class="text-muted">段落文字段落文字段落文字段落文字</p>
      <p class="text-muted">段落文字段落文字</p>
      <button type="button" class="cool-btn">联系我们</button>
    </intro-area>
    <div class="space"></div>
    <ad-area>
      <h3>联系我们</h3>
      <p class="m-0">这是一个广告，拨打电话400-000-0000</p>
    </ad-area>
    <div class="space"></div>
    <div class="container">
      <h2 class="text-center">标题标题</h2>
      <p class="text-center">sdfsdf</p>
    </div>
    <card-area></card-area>
    <div class="space"></div>
  </main>
</template>

<script>
  import Carousel from "./Carousel";
  import CardArea from "./CardArea";
  import AdArea from "./AdArea";
  import IntroArea from "./IntroArea";
  export default {
    name: 'MainPage',
    components: {IntroArea, AdArea, CardArea, Carousel}
  }
</script>
