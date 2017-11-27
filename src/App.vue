<template>
  <div id="app">
    <div class="columns">
      <div class="column">
        <Navbar></Navbar>
        <img src="./assets/logo.png">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'app',
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 10px;
  margin-right: 10px;
  /* margin-top: 50px; */
}
</style>
