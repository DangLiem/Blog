<template>
  <div class="wraper-page">
    <div class="container">
      <!-- Header component -->
      <Header />
      <!-- Main -->
      <div class="main pt-3">
        <nuxt />
      </div>
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
};
</script>

<style scoped>
</style>>
