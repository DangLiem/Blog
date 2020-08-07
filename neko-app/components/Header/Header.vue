<template>
  <div class="header">
    <div class="navTop fixed-top">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <nuxt-link to="/">
            <a class="nav-link">Diễn đàn</a>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Java</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">PHP</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Các khoá học</a>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about">
            <a class="nav-link">Giới thiệu</a>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="slider d-flex flex-column align-items-center justify-content-center">
      <div class="row d-flex">
        <div class="col-md-5">
          <img
            id="imgBg"
            src="https://64.media.tumblr.com/tumblr_ma1ur9ch931qdabzno1_1280.png"
            alt
            srcset
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navTop {
  background-color: #f5f7fb;
}
#imgBg {
  width: 100%;
  height: 100%;
}
.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>