<template>
  <section class="home_section bg-[#F5FCFF] min-h-[81vh] items-center flex">
    <div class="container mx-auto flex justify-between items-center">

      <div class="home__info w-[100%]">
        <p class="home__info-self font-bold text-[#282938] text-xl">Hey, I am John</p>
        <p class="home__info-title text-[#282938] text-7xl font-bold py-3">I create <span class="text-[#5E3BEE]">product design</span> and brand experience</p>
        <p class="home__info-text text-2xl text-[#1C1E53] font-semibold w-[70vh]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        <Button btnType="button" textContent="Get In Touch" class="bg-[#5E3BEE] py-3 px-3 text-white rounded-lg mt-5"></Button>
      </div>

      <div class="home__img w-[80vh]">
        <img src="../assets/images/home_image.png" alt="Home img">
      </div>
      
    </div>
  </section>
</template>

<script>
import Button from "../ui/Button.vue"
  export default {
  name: "HomeView",
  components: {
      Button
    }
  }
</script>

<style lang="scss" scoped>

</style>