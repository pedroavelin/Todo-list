<template>
  <v-app theme="dark">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script>

<style>
  /* Firefox */
  * {
    scrollbar-width: none;
    scrollbar-color: #a6a6a6 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 1px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #a6a6a6;
    border-radius: 50px;
    border: 1px dashed #8e7171;
  }
</style>
