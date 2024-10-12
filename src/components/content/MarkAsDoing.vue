<script setup>

    defineProps({
        task: Object
    })

    const emits = defineEmits([
        "mark-as-doing"
    ])

</script>
<template>

    <button v-if="task.doing === 0" @click="emits('mark-as-doing', task)">></button>
    <button v-if="task.doing === 1" @click="emits('mark-as-doing', task)"><</button>
    
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