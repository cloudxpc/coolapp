<template>
  <header class="bg-white sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-light">
        <span class="navbar-brand mb-0 h1 mr-lg-5">
          <font-awesome-icon icon="assistive-listening-systems" class="logo"></font-awesome-icon>
          <span v-text="$eventBus.setting.brand"></span>
        </span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-lg-4" :class="{'active':this.$route.path === '/'}">
              <router-link class="nav-link" to="/">首页
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <router-link class="cool-btn text-white text-decoration-none" to="/about"><font-awesome-icon icon="phone-volume"></font-awesome-icon>&nbsp;联系我们</router-link>
          </form>
        </div>
      </nav>
    </div>
    <div class="color-bar"></div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderBar'
  }
</script>

<style scoped>
  .color-bar {
    background: linear-gradient(150deg, #97c74e, #2ab9a5);
    height: 2px;
  }

  .logo {
    color: #6cc756;
  }
</style>
