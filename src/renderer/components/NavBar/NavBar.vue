<template>
  <div class="navbar">
    <v-app-bar
        dense
        elevation="4"
    >
      <v-toolbar-title>E-Vue</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="navbar__container">
        <v-btn v-for="route in paths" @click="open(route.path)" outlined color="indigo">
          {{route.name}}
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
  import { routes } from '../../utils/const/routes'
  export default {
    name: 'NavBar',
    data () {
      return {
        paths: routes
      }
    },
    methods: {
      open (link) {
        if (this.$router.history.current.path !== link) {
          this.$router.push(link)
        }
      }
    }
  }
</script>

<style scoped>
.navbar__container {
  display: flex;
  gap: 10px;
}
</style>
