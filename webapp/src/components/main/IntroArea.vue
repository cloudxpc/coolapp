<template>
  <div class="container">
    <div class="row">
      <div class="col-md" :class="{'order-last':right}">
        <img :src="src" class="img-fluid rounded">
      </div>
      <div class="col-md">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImageText',
    props: ['right', 'src']
  }
</script>
