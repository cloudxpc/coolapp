<template>
  <div class="container">
    <div class="card-deck">
      <div class="card shadow-sm" v-for="item in cards">
        <img :src="item.img" class="card-img-top" alt="Image">
        <div class="card-body">
          <h5 class="card-title" v-text="item.title"></h5>
          <p class="card-text" v-text="item.description"></p>
          <p class="card-text"><small class="text-muted" v-text="item.footer"></small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardArea',
    props: ['cards']
  }
</script>
