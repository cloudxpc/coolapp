<template>
  <main class="bg-white">
    <div class="container py-5">
      <div>
        <p>分类 分类一 分类二 分类三</p>
        <p>分类 分类一 分类二 分类三</p>
        <p>分类 分类一 分类二 分类三</p>
      </div>
      <hr>
      <product-item class="mb-4" v-for="(item, index) in items" :key="index" :img="item.img" :title="item.title" :description="item.description" :price="item.price" :footer="item.footer"></product-item>
    </div>
    <loading v-if="isLoading"></loading>
  </main>
</template>

<script>
  import Loading from "../common/Loading";
  import ProductItem from "./ProductItem";
  export default {
    name: 'ProductList',
    components: {ProductItem, Loading},
    data: function(){
      return {
        isLoading: false,
        items: []
      };
    },
    created() {
      this.isLoading = true;
      this.$axios.get(this.$eventBus.productUrl).then(res => {
        this.items = res.data.products;
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
      });
    }
  }
</script>
