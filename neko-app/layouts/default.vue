<template>
  <div class="wraper-page">
    <div class="container">
      <!-- Header component -->
      <Header />
      <!-- Main -->
      <main>
        <div class="main pt-3">
          <nuxt />
        </div>
      </main>
      <div class="footer pt-5">
        <div>
          <iframe
            id="frameMap"
            style="border:0;"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.89647030233!2d105.78045081438825!3d21.036828092879933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454caaf9fa467%3A0x4cfd76cf514e1ce1!2zMTQ0IFh1w6JuIFRo4buneSwgTWFpIEThu4tjaCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1590139544745!5m2!1svi!2s"
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <div>
        <ul id="ulContact">
          <li>Dang Quang Liem</li>
          <li>Phone: 0969731496</li>
          <li>Email: dangliem.uet@gmail.com</li>
          <li>Address: Cau Giay- Ha Noi</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
export default {
  components: {
    Header
  }
};
</script>

<style scoped>
#frameMap {
  height: 200px;
  width: 100%;
}
</style>>
