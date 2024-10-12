<script setup>
    const emits = defineEmits([

        "clicked"

    ])
</script>
<template>
    <button id="back-button" @click="emits('clicked', 'back')"><</button>
</template>
<style scoped>

    button{

        position: absolute;
        top: 5%;
        left: 7%;
        width: 5%;
        height: 4%;
        border: none;
        font-size: xx-large;

    }

</style>