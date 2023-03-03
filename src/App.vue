<template>

  <Header/>

  <main>
    <RouterView/>
  </main>

  <Footer/>


</template>

<script>
import Header from "./components/Header/Header.vue"
import Footer from "./components/Footer/Footer.vue"
import { RouterView } from "vue-router"



  export default {
  name: "App",
  components: {
    Header,
    Footer,
    }
  }
</script>

<style scoped>

</style>