<template>
    <label :for="labelId" class=" w-[49%] my-3 flex flex-col ">
        <p class=" my-2" v-if="placeholder">{{ placeholder }}</p>
        <input :type="inputType" :id="labelId" :placeholder="placeholder" class="p-3 w-full ring-1 ring-[#5E3BEE] focus:outline-none placeholder:text-slate-300 rounded-lg" :value="value">
    </label>
</template>

<script>
    export default {
        name: "Input",
        props: {
            labelId: String,
            placeholder: String,
            inputType: String,
            value: String,
        }
    }
</script>

<style lang="scss" scoped>

</style>