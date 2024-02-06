<template>
  <div class="wrapper">
    <div class="menu-nav">
      <MenuNav />
    </div>
    <div class="content">
      <nuxt />
    </div>
    <div class="footer">
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import MenuNav from '~/components/MenuNav.vue'
import FooterComponent from '~/components/FooterComponent.vue'

export default {
  components: {
    MenuNav,
    FooterComponent
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  min-height: 100vh;
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .footer {
    position: relative;
  }
}
</style>
