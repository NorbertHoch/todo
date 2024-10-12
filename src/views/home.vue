<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import {ref, onMounted} from 'vue'
  import ListTitle from "../components/head/Title.vue"
  import ListTasks from "../components/content/ListTasks.vue"
  import AddToList from "../components/head/AddToList.vue"
  import BackButton from "../components/head/BackButton.vue"
  import TaskDescription from '../components/content/TaskDescription.vue'
  import {addItem, getAllItems, deleteItem, deleteAllItems, getHighestId} from '@/config/db'
  
  const mainList = ref([])
  const indexTree = ref([-1])
  const currTask = ref({})
  const doingList = ref([])
  var i = 0
  
  const refreshTasks = async () => {
    mainList.value = await getAllItems().then(items => items.filter(item => item.pid === indexTree.value[indexTree.value.length - 1] && item.doing === 0))
    doingList.value = await getAllItems().then(items => items.filter(item => item.pid === indexTree.value[indexTree.value.length - 1] && item.doing === 1))
  }
  
  const refreshIndex = async () => {
    console.log(getHighestId())
    i = await getHighestId() + 1
  }

  const addTask = async (pid, name) => {
    await addItem({
      id: i++,
      name: name,
      desc: "",
      pid: pid,
      doing: 0
    })
    refreshTasks()
  }
  
  const deleteTask = async (task) => {
    await deleteItem(task.id)
    refreshTasks() 
  }
  
  const deeper = async (task) => {
    indexTree.value.push(task.id)
    refreshTasks()
  }
  
  const shallower = async () => {
    indexTree.value.pop()
    refreshTasks()  
  }
  
  const showDescription = async (task) => {
    currTask.value = task
  }
  
  const changeDescription = async (desc) => {
    currTask.value.desc = desc
    await addItem(currTask)
    refreshTasks()
  }
  
  const deleteAllTasks = async () => {
    await deleteAllItems()
    refreshTasks()
    refreshIndex()
  }

  const markAsDoing = async (task) => {
    const updatedTask = { ...task, doing: task.doing === 1 ? 0 : 1 };
    await addItem(updatedTask)
    refreshTasks()
  }
  
  onMounted(() => {refreshTasks(), refreshIndex()})

</script>

<template>

  <div id="head">

    <ListTitle/>
    <AddToList @clicked="addTask(indexTree[indexTree.length - 1], $event)"/>
    <BackButton v-if="indexTree.length > 1" @clicked="shallower()"/>

  </div>
  <div id="content">
    <div id="main-list-div">
      <h1>To-Do</h1>
      <ul id="main-list">
        
        <ListTasks v-for="task in mainList" :task="task" :key="task.id" @delete-task="deleteTask" @doubleclick="deeper" @singleclick="showDescription" @mark-as-doing="markAsDoing"/>
        
      </ul>
    </div>

    <div id="currently-doing-div">
      <h1>Currently Doing</h1>
      <ul id="currently-doing-list">
        
        <ListTasks v-for="task in doingList" :task="task" :key="task.id" @delete-task="deleteTask" @doubleclick="deeper" @singleclick="showDescription" @mark-as-doing="markAsDoing"/>

      </ul>
    </div>

    <div id="description-div">
      <h1> Description</h1>
      <TaskDescription v-if="currTask.id != undefined" v-model:task="currTask" @onBlur="changeDescription" 
      @onDescChanged="getNewDescription"/>
      <textarea v-else></textarea>
    </div>

  </div>
  <div id="foot">
    1lmb - description <br>
    2lmb - create tasks under tasks
    <button @click="deleteAllTasks">Delete ALL tasks</button>
  </div>

</template>

<style scoped>
  #head{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5%;

  }
  #content{

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75%;

  }
  #main-list-div, #currently-doing-div{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }
  #description-div{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }
  textarea{

    background-color: white;
    width: 90%;
    height: 85%;
    box-sizing: border-box;
    border-radius: 20px;
    margin: 5%;
    padding: 7%;
    resize: none;

  }
  ul{

    background-color: white;
    width: 90%;
    height: 85%;
    box-sizing: border-box;
    border-radius: 20px;
    margin: 5%;
    padding: 0;
    overflow: auto;
    border: 4px solid rgb(255, 255, 255);

  }
  h1{

    color: white;

  }
</style>