<script setup>

    defineProps({

        task: Object

    })
    const emits = defineEmits([
        "onBlur",
        "onDescChanged"
    ])

</script>
<template>

    <textarea id="description-content" @blur="emits('onBlur', $event.target.value)" :value="task.desc"></textarea>

</template>