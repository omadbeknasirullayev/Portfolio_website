<template>
    <section class="testimonials min-h-[81vh] bg-[#F5FCFF] flex items-center">
        <div class="container mx-auto ">
            <div class="testimonials__info">
                <p class="font-bold text-sm">Clients Feedback</p>
                <p class="font-bold text-4xl">Customer testimonials</p>
            </div>

            <div class="feedback__cards pt-20 flex justify-evenly">
                <Card v-for="item in testimonials" class="card p-5 rounded-lg border border-[#006B6A] ">
                   <ul class="flex gap-3">
                    <li v-for="_ in stars" class="w-[20px]"><img :src="item.star_img" alt=""></li>
                </ul>
                <p class="py-10 text-[#1C1E53]">{{ item.text }}</p>
                <div class="flex items-center gap-5">
                    <img :src="item.img" alt="" width="60">
                    <div>
                        <p class="font-bold">{{ item.name }}</p>
                        <p>{{ item.company }}</p>
                    </div>
                </div>
                </Card>
            </div>
        </div>
    </section>
</template>

<script>
import Card from "../ui/Card.vue"
import testimonials from "../scripts/testimonials"
export default {
    name: "TestimonialsView",
    data() {
        return {
            testimonials: testimonials,
            stars: "stars"
        }
    },
    components: {
        Card
    }
}
</script>

<style  scoped>
.card {
    background-color: #F5FCFF !important;
    box-shadow: none !important;
}
</style>