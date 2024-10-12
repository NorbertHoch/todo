<script setup>

import {ref} from "vue"

const emits = defineEmits([

    "clicked"

])

const newTaskName = ref("")

</script>
<template>

    <div>
        <input type="text" name="new-task-name" id="new-task-name" v-model="newTaskName">
        <button id="add-new-task" @click="emits('clicked', newTaskName)">+</button>
    </div>

</template>