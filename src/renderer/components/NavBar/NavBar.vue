<template>
  <div class="navbar">
    <v-app-bar
        dense
        elevation="4"
    >
      <v-toolbar-title>E-Vue</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="navbar__container">
        <div v-for="route in paths">
          <v-btn @click="open(route.path)" color="indigo"
                 :disabled="route.path === currentPath" outlined>
            {{ route.name }}
          </v-btn>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script src="./NavBar.js"/>
<style src="./NavBar.css" scoped/>
