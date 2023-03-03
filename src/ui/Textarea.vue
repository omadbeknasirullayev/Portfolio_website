<template>
    <p class=" my-2" v-if="area_name" :select_name="area_name">{{ area_name }}</p>
    <textarea name="contact_area" class="w-full h-[150px] ring-1 ring-[#5E3BEE] focus:outline-none rounded-lg p-5 resize-none" >
        
    </textarea>
</template>

<script>
    export default {
    name: "Textarea",
    props: {
            area_name: "",
        }
    }
</script>

<style lang="scss" scoped>

</style>