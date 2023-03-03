<template>
   <section class="contact min-h-[81vh] flex items-center justify-center">
            <div class="container mx-auto flex flex-col items-center">
                <div class="contact__info text-center">
                   <p class="uppecase font-bold">Get In Touch</p>
                   <h1 class="uppercase font-bold text-4xl my-2">Contact me</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>

                <form action="#" class="mt-10">
                    <div class="flex flex-wrap justify-between">
                           <Input inputType="text" labelId="fname" placeholder="Enter firstname" class=""/>
                           <Input inputType="text" labelId="lname" placeholder="Enter lastname"/>
                           <Input inputType="email" labelId="email" placeholder="Email"/>
                           <Input inputType="tel" labelId="tel" placeholder="Phone number"/>   
                    </div>
                    <Select class="mt-10" :option_value="option_value" :select_name='`Choose a topic`'/>
                    <Textarea class="mt-10" :area_name="`Message`"/>

                    <input type="checkbox" name="check" id="check_form"> <span class="px-2">I accept the terms</span>
                    <div class="flex items-center justify-center">
                        <Button btnType="submit" textContent="Submit" class=" bg-[#5E3BEE] px-5 py-3 rounded-lg mt-10 text-white focus:ring-2 focus:ring-[#5E3BEE]" />
                    </div>

                </form>
            </div>
        </section>
</template>

<script>
import Input from "../ui/Input.vue"
import Select from "../ui/Select.vue"
import Textarea from "../ui/Textarea.vue"
import Button from "../ui/Button.vue"
    export default {
    name: "ContactView",
    data() {
        return {
            option_value: ["Dramma", "Comedia", "Tragediya"],
        }
    },
    components: {
        Input,
        Select, 
        Textarea,   
        Button,
        }
    }
</script>

<style  scoped>
/* .card {
    width: 100% !important;
} */
</style>