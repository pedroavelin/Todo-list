<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="alert-notification">
    <v-alert
    class="animate__animated animate__bounceInDown animate__repeat-1"
    closable
    :text="alertStore.text"
    :type="alertStore.type"
  ></v-alert>
  </div>
</template>

<script setup>
import 'animate.css';
import { useAlertStore } from '@/store/alert';

const alertStore = useAlertStore();
</script>


<style scoped>
.alert-notification{
  position: fixed;
  z-index:1;
  bottom: 50%;
  width: 100%;
  padding: 0 35% 0 35%;
}
</style>