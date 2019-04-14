<template>
  <div id="carousel-main" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel-main" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-main" data-slide-to="1"></li>
      <li data-target="#carousel-main" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="bg-dark text-light carousel-img img-1">
          <h1
            style="position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); display: inline-block;">
            First</h1>
        </div>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="bg-dark text-light carousel-img img-2">
          <h1
            style="position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); display: inline-block;">
            Second
          </h1>
        </div>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="bg-dark text-light carousel-img img-3">
          <h1
            style="position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); display: inline-block;">
            Third</h1>
        </div>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
    name: 'Carousel'
  }
</script>

<style scoped>
  .carousel-img {
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
  }

  .img-1 {
    background-image: url('https://wizixo.webestica.com/assets/images/banner/05.jpg');
  }

  .img-2 {
    background-image: url('https://wizixo.webestica.com/assets/images/banner/02.jpg');
  }

  .img-3 {
    background-image: url('https://wizixo.webestica.com/assets/images/banner/07.jpg');
  }
</style>
