<template>
  <div id="carousel-main" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="(item, index) in carousels"
          data-target="#carousel-main"
          :data-slide-to="index"
          :class="{'active':index === 0}"></li>
    </ol>
    <div class="carousel-inner">
      <div v-for="(item, index) in carousels" class="carousel-item" :class="{'active': index === 0}">
        <div class="bg-dark text-light carousel-img" :style="{'background-image':'url(\'' + item.img + '\')'}">
          <h1 style="position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); display: inline-block;" v-text="item.title"></h1>
        </div>
        <div class="carousel-caption d-none d-md-block">
          <h5 v-text="item.subtitle"></h5>
          <p v-text="item.description"></p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel-main" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-main" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    props: ['carousels']
  }
</script>

<style scoped>
  .carousel-img {
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
  }
</style>
