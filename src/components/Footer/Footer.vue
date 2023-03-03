<template>
    <footer class="bg-[#d7e8ef] min-h-[100px] items-center flex">
        <div class="container mx-auto flex items-center justify-between ">
            <div class="logo">
                    <img src="../../assets/images/Logo.svg" alt="here logo image">
                </div>

                <ul class=" menu__list flex justify-between w-[70vh]">

                    <li class="list-item">
                        <RouterLink to="/" class="list-items text-[#1C1E53] text-xl ">Home</RouterLink>
                    </li>

                    <li class="list-item">
                        <RouterLink to="/expertise" class="list-items text-[#1C1E53] text-xl">Expertise</RouterLink>
                    </li>

                    <li class="list-item">
                        <RouterLink to="/portfolio" class="list-items text-[#1C1E53] text-xl">Portfolio</RouterLink>
                    </li>

                    <li class="list-item">
                        <RouterLink to="/about" class="list-items text-[#1C1E53] text-xl">About Me</RouterLink>
                    </li>

                    <li class="list-item">
                        <RouterLink to="/contact" class="list-items text-[#1C1E53] text-xl">Contact</RouterLink>
                    </li>
                    
                    <li class="list-item">
                        <RouterLink to="/testimonials" class="list-items text-[#1C1E53] text-xl">Testimonials</RouterLink>
                    </li>
                </ul>

                <ul class="link__list flex gap-3">
                    <li>
                        <a href="https://www.facebook.com/omadbek.nasirullayev.5">
                            <img src="../../assets/images/Facebook.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/omadbek_nasirullayev/">
                            <img src="../../assets/images/Instagram.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../../assets/images/Twitter.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/omadbek-nasirullayev-877a17226/">
                            <img src="../../assets/images/LinkedIn.svg" alt="">
                        </a>
                    </li>
                </ul>
                
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.router-link-active {
    color:blueviolet
}
</style>