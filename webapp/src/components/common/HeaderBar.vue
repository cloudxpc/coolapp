<template>
  <header class="bg-white">
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
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mr-lg-4 active">
              <router-link class="nav-link" to="/">首页
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item mr-lg-4">
              <router-link class="nav-link" to="/hello">产品</router-link>
            </li>
            <li class="nav-item mr-lg-4">
              <router-link class="nav-link" to="/hello">听力知识</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdown" role="button"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="javascript:;">Action</a>
                <a class="dropdown-item" href="javascript:;">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="javascript:;">Something else here</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <div class="input-group">
              <input class="form-control" type="search" placeholder="填入搜索内容" aria-label="Search">
              <div class="input-group-append">
                <button class="cool-btn my-2 my-sm-0" type="button" style="border-top-left-radius: 0;border-bottom-left-radius: 0;">搜索</button>
              </div>
            </div>
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
