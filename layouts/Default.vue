<template>
  <div>
    <MenuNav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import MenuNav from '~/components/MenuNav.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    MenuNav,
    Footer
  }
}
</script>
