import Vue from 'vue';

export const eventBus = new Vue({
  data: {
    setting: {}
  },
  computed: {
    baseUrl: function () {
      return 'http://localhost:8080';
    },
    dataUrl: function () {
      return 'https://ltzs.uutic.com/data.json';
    },
    productUrl: function () {
      return 'https://ltzs.uutic.com/product.json';
    }
  },
  methods: {
    alert: function () {
    },
    confirm: function () {
    },
    start: function () {
      this.$emit('loading-start');
    },
    end: function () {
      this.$emit('loading-end');
    },
    toast: function () {
    }
  }
});
