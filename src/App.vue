<template>
  <Navbar></Navbar> <!-- Navigation bar -->
  <router-view/> <!-- Route view -->
</template>

<script>
import Navbar from './components/Navbar'; // Navbar component

export default {
  components: { Navbar }, // Register component
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  max-width: 600px; 
  margin: 0 auto;
  color: #2c3e50; 
  user-select: none;
}
</style>
