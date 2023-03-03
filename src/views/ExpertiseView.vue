<template>
    <section class="expertise min-h-[81vh]  flex items-center">
        <div class="container mx-auto">
            <div class="expertise__info">
                <p class="font-bold text-sm">My Skills</p>
                <p class="font-bold text-4xl">My Expertise</p>
            </div>

            <div class="cards flex justify-around py-20 ">

                <Card v-for="item in expert" class="bg-[#F5FCFF] p-7 cursor-pointer hover:bg-[#d9eaf2] rounded-lg"> 
                    <img :src="item.img" alt="cvcs"> 
               
                    <p class="font-bold text-xl py-5">{{ item.title }}</p>
                    <p>{{ item.text }}</p>
                </Card>
            </div>
        </div>
    </section>
</template>

<script>
import Card from "../ui/Card.vue"
import expertiseCard from "../scripts/expertise"
    export default {
    name: "ExpertiseView",
    data() {
        return {
            expert: expertiseCard,
        }
    },
    components: {
        Card,
            
        }
    }
</script>

<style scoped>

</style>