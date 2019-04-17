<template>
  <main class="bg-white">
    <carousel :carousels="$eventBus.setting.carousels"></carousel>
    <div class="space"></div>
    <intro-area :src="$eventBus.setting.leftImageIntro.img" v-if="$eventBus.setting.leftImageIntro">
      <h1 class="mb-4" v-text="$eventBus.setting.leftImageIntro.title"></h1>
      <p class="text-muted" v-text="$eventBus.setting.leftImageIntro.description"></p>
      <button type="button" class="cool-btn">联系我们</button>
    </intro-area>
    <div class="space"></div>
    <div class="bg-light" v-if="$eventBus.setting.intro">
      <div class="container py-5">
        <h1 class="text-center text-dark mb-4" v-text="$eventBus.setting.intro.title"></h1>
        <p class="text-center text-muted" v-text="$eventBus.setting.intro.description"></p>
      </div>
    </div>
    <div class="space"></div>
    <intro-area right="true" :src="$eventBus.setting.rightImageIntro.img" v-if="$eventBus.setting.rightImageIntro">
      <h1 class="mb-4 align" v-text="$eventBus.setting.rightImageIntro.title"></h1>
      <p class="text-muted" v-text="$eventBus.setting.rightImageIntro.description"></p>
    </intro-area>
    <div class="space"></div>
    <ad-area v-if="$eventBus.setting.adArea">
      <h3 v-text="$eventBus.setting.adArea.title"></h3>
      <p class="m-0" v-text="$eventBus.setting.adArea.description"></p>
    </ad-area>
    <div class="space"></div>
    <div v-if="$eventBus.setting.cardArea">
      <div class="container">
        <h2 class="text-center" v-text="$eventBus.setting.cardArea.title"></h2>
        <p class="text-center" v-text="$eventBus.setting.cardArea.description"></p>
      </div>
      <card-area :cards="$eventBus.setting.cardArea.cards"></card-area>
    </div>
    <div class="space"></div>
  </main>
</template>

<script>
  import Carousel from "./Carousel";
  import CardArea from "./CardArea";
  import AdArea from "./AdArea";
  import IntroArea from "./IntroArea";
  import Loading from "../common/Loading";
  export default {
    name: 'MainPage',
    components: {Loading, IntroArea, AdArea, CardArea, Carousel}
  }
</script>
