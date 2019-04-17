<template>
  <main class="bg-white">
    <div class="container py-5">
      <div>
        <p>分类 分类一 分类二 分类三</p>
        <p>分类 分类一 分类二 分类三</p>
        <p>分类 分类一 分类二 分类三</p>
      </div>
      <hr>
      <div class="row mb-4" v-for="item in items">
        <div class="col-auto">
          <div class="bg-dark product-list-img" :style="{'background-image':'url(\'' + item.img + '\')'}"></div>
        </div>
        <div class="col d-flex flex-column">
          <div class="row flex-fill">
            <div class="col-md col-12">
              <h5 v-text="item.title"></h5>
              <p class="product-list-desc" v-text="item.description"></p>
            </div>
            <div class="col-lg-3 col-md-4 col-12">
              <h3 class="price mb-0" v-text="$currency(item.price)"></h3>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p class="mb-0"><small class="text-muted" v-text="item.footer"></small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <loading v-if="isLoading"></loading>
  </main>
</template>

<script>
  import Loading from "../common/Loading";
  export default {
    name: 'ProductList',
    components: {Loading},
    data: function(){
      return {
        isLoading: false,
        items: []
      };
    },
    created() {
      this.isLoading = true;
      this.$axios.get('https://cloudxpc.github.io/coolapp/webapp/product.json').then(res => {
        this.items = res.data.products;
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
      });
    }
  }
</script>

<style scoped>
  .product-list-img {
    width: 150px;
    height: 150px;
    background-size: cover;
    background-position: center;
  }

  .product-list-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
