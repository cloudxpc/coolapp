import Vue from 'vue';

export const eventBus = new Vue({
  computed: {
    baseUrl: function () {
      return 'http://localhost:8080';
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
