<template>
    <button :type="btnType" class="px-3">{{ textContent }}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        btnType: String,
        textContent: String
    }
}
</script>

<style lang="scss" scoped></style>