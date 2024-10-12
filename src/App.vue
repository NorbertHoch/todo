<script setup>

</script>

<template>

  <div id="main-head">
    <h1>TODO</h1>
    <nav id="main-nav">
      <router-link to="/home">Home</router-link>
    </nav>
  </div>
  <router-view></router-view>

</template>

<style scoped>

  #main-head{

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 15%;

  }
  h1{

    font-size: 300%;
    color: white;
    margin: 0;
    padding: 0;

  }
  #main-nav{

    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    border: solid 1px white;
    border-left: none;
    border-right: none;
    a, a:visited{

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      color: white;
      height: 100%;
      width: 10%;
      border-left: 1px solid white;
      border-right: 1px solid white;
      font-size: large;

    }
    a:hover{

      background-color: white;
      color: black;

    }

  }

</style>
