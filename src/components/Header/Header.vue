<template>
    <header class="shadow-lg z-50 min-h-[100px]">
        <nav class="container mx-auto flex justify-between items-center ">
            <div class="logo">
                <img src="../../assets/images/Logo.svg" alt="here logo image">
            </div>

            <ul class="flex justify-between w-[50%] ">

                <li class="list-item">
                    <RouterLink to="/" class="list-items text-[#1C1E53] ">Home</RouterLink>
                </li>

                <li class="list-item">
                    <RouterLink to="/expertise" class="list-items text-[#1C1E53]">Expertise</RouterLink>
                </li>

                <li class="list-item">
                    <RouterLink to="/portfolio" class="list-items text-[#1C1E53]">Portfolio</RouterLink>
                </li>

                <li class="list-item">
                    <RouterLink to="/about" class="list-items text-[#1C1E53]">About Me</RouterLink>
                </li>

                <li class="list-item">
                    <RouterLink to="/testimonials" class="list-items text-[#1C1E53]">Testimonials</RouterLink>
                </li>


            </ul>

                <RouterLink to="/contact" class="contact_btn py-3 px-6 border-[2px] border-[#5E3BEE] rounded-lg text-[#5E3BEE] block ">Contact Me</RouterLink>
            <!-- <Button btnType="button" textContent="Contact Me"
                class=" py-3 px-6 border-[2px] border-[#5E3BEE] rounded-lg text-[#5E3BEE] text-xl">
            </Button> -->
        </nav>
    </header>
</template>

<script>
import Button from "../../ui/Button.vue"
export default {
    name: "Header",
    components: {
        Button
    }
}
</script>

<style scoped>
nav {
    height: 80px;
}

.list-items {
    color: #1C1E53;
    font-size: 20px;
}

.router-link-active {
    color:blueviolet
}

.contact_btn {
    color: #5E3BEE !important;
}
</style>