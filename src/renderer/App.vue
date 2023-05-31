<template>
  <div id="app">
        <nav-bar></nav-bar>
    <div class="app__router">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NavBar from './components/NavBar/NavBar.vue'

  export default {
    name: 'finance-front',
    components: {
      NavBar
    }
  }
</script>

<style src="./assets/styles/app.css" />
<style src="./assets/styles/grid.css" />
