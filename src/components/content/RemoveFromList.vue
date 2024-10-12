<script setup>

    defineProps({
        task: Object
    })

    const emits = defineEmits([
        "delete-task"
    ])

</script>
<template>

    <button @click="emits('delete-task', task)">X</button>

</template>
<style scoped>
    button{

        width: 15%;
        border: none;
        background: none;
        font-size: 150%;
        color: white;
        cursor: pointer;
        margin: 10%;

    }
</style>