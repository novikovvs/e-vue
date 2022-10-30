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

<style>
html {
  height: 100%;
  background: rgb(238,174,202);
  background: linear-gradient(176deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}

.app__router {
  height: 85vmin;
  background-color: white;
  margin: 2% 5% 2% 5%;
  padding: 10px;
  border-radius: 10px;
}
</style>
