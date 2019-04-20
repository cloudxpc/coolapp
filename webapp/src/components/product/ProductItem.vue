<template>
  <div class="row clickable">
    <div class="col-5 col-md-2">
      <div class="bg-dark product-list-img" :style="{'background-image':'url(\'' + img + '\')'}"></div>
    </div>
    <div class="col d-flex flex-column pl-0">
      <div class="row flex-fill">
        <div class="col-md col-12">
          <h5 v-text="title"></h5>
          <p class="product-list-desc text-secondary" v-text="description"></p>
        </div>
        <div class="col-lg-3 col-md-4 col-12">
          <h5 class="product-list-price mb-0" v-text="$currency(price)"></h5>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="mb-0"><small class="text-muted" v-text="footer"></small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductItem',
    props: ['img', 'title', 'description', 'price', 'footer']
  }
</script>
