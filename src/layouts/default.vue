<!-- eslint-disable vue/multi-word-component-names -->
<template>
<Alert v-if="alertStore.showAlert"/>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <v-img
        src="https://picsum.photos/1920/1080?random"
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        height="80"
        cover
        class="pt-2"
        >
          <v-list>
          <v-list-item
            prepend-avatar="https://media.licdn.com/dms/image/C4D03AQF7jP4O_1Dh1Q/profile-displayphoto-shrink_400_400/0/1630611358440?e=1718236800&v=beta&t=aQkK_GYU9_nrDrrO3Adzq2_E1YI0Tz7rngwdHLJG900"
            subtitle="Web development"
            title="Pedro Epalanga"
          >
          </v-list-item>
        </v-list>
        </v-img>

        <v-divider></v-divider>

        <v-list :lines="false" density="compact" nav>
          <Routerlink v-for="(item, i) in items" :key="i">
            <v-list-item :value="item" color="primary" :to="item.to">
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title :textContent="item.text"></v-list-item-title>
            </v-list-item>
          </Routerlink>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
        density="prominent"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>Lista de tarefas</v-app-bar-title>
      </v-app-bar>

      <v-main>
        <!--  -->
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Alert from '@/components/Alert.vue';
import { useAlertStore } from '@/store/alert';

const alertStore = useAlertStore();
const drawer = ref(null);
const items = [
  { text: "Lista de tarefas", icon: "mdi-folder", to: "/home" },
  { text: "Sobre", icon: "mdi-account-multiple", to: "/about" },
];
</script>