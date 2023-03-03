<template>
    <section class="portfolio min-h-[81vh] flex items-center">
        <div class="container mx-auto ">
             <div class="expertise__info">
                    <p class="font-bold text-sm">Recent Projects</p>
                    <p class="font-bold text-4xl">My Portfolio </p>
                </div>

           <div class="portfolio__cards py-10 flex justify-evenly">
             <Card v-for="item in portfolio" class="p-2 rounded-lg shadow-lg hover:scale-[1.1] duration-300">
                    <img :src="item.img" alt="">
                    <p class="font-bold text-xl">{{ item.title }}</p>
                    <p class="py-5">{{ item.text }}</p>
                    <div class="flex items-center gap-1">
                        <a class="font-bold inline">{{ item.link }}</a> 
                        <img src="../assets/images/portfolio_dribble.svg" alt="" width="12">
                    </div>
                </Card>
           </div>
        </div>
    </section>
</template>

<script>
import Portfolio from "../scripts/portfolio"
import Card from "../ui/Card.vue"
    export default {
    name: "PortfolioView",
    data() {
        return {
            portfolio: Portfolio,
        }
    },
    components: {
            Card
        }
    }
</script>

<style lang="scss" scoped>

</style>