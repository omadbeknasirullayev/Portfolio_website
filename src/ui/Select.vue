<template>
    <p class=" my-2" v-if="select_name" :select_name="select_name">{{ select_name }}</p>
    <select name="select_topic" id="" class="w-full py-3 ring-1 ring-[#5E3BEE] focus:outline-none rounded-lg" :option_value="option_value">
        <option v-for="item in option_value" :value="item">{{item}}</option>
       
    </select>
</template>

<script>
    export default {
    name: "Select",
    props: {
        select_name: "",
        option_value: [],
            
        }
    }
</script>

<style lang="scss" scoped>

</style>