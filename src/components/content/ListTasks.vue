<script setup>

    import RemoveFromList from "./RemoveFromList.vue"
    import MarkAsDoing from "./MarkAsDoing.vue";
    defineProps({
        task: Object
    })
    const emits = defineEmits([
        "delete-task",
        "doubleclick",
        "singleclick"
    ])

</script>
<template>
    <li>

        <p @dblclick="emits('doubleclick', task)" @click="emits('singleclick', task)">
            {{ task.name }}
        </p>
        <div>
            <MarkAsDoing :task="task" @mark-as-doing="emits('mark-as-doing', task)"/>
            <RemoveFromList :task="task" @delete-task="emits('delete-task', task)"/> 
        </div> 

    </li>
</template>
<style scoped>

    li{

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: grey;
        box-sizing: border-box;
        margin: 0;
        height: 10%;
        padding: 0 5% 0 5%;
        border-bottom: solid white 1px;

    }
    p{

        text-decoration: underline;
        font-size: larger;
        color: white;
        cursor: pointer;

    }

</style>