<script setup>

    defineProps({

        task: Object

    })
    const emits = defineEmits([
        "onInput",
        "onDescChanged"
    ])

</script>
<template>

    <textarea id="description-content" @input="emits('onInput', $event.target.value)" :value="task.desc"></textarea>

</template>