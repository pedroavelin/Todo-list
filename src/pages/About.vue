<!-- eslint-disable vue/multi-word-component-names -->
<template>
 <div class="ma-4 text-center">
  <h1 class="ma-4">Obrigado...!</h1>
  <p class="ma-4">Tecnologias utilizadas</p>
 </div>
  <div class="d-flex justify-lg-space-around align-center">
    <v-card class="" width="244">
      <v-img
        class="ma-3"
        height="200px"
        src="https://external-preview.redd.it/an-introduction-to-pinia-the-alternative-state-management-v0-HYcNFtHyKHGA2l8Y1ZlOp12FF07570TcDzzMkZky91A.jpg?width=1080&crop=smart&auto=webp&s=fd45473042b89da1c59a6436a50b227ce1aee028"
        cover
      ></v-img>

      <v-card-title> Pinia + Vue Js </v-card-title>

      <v-card-subtitle> The Progressive JavaScript Framework </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    <v-card class="" width="244">
      <v-img
        class="ma-3"
        height="200px"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg"
        cover
      ></v-img>

      <v-card-title> Vuetify 3 </v-card-title>

      <v-card-subtitle> Incrível Biblioteca Front-End </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text value="1">
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    <v-card class="" width="244">
      <v-img
        class="ma-3"
        height="200px"
        src="https://logowik.com/content/uploads/images/netlify-new-20234970.logowik.com.webp"
        cover
      ></v-img>

      <v-card-title> Netlify</v-card-title>

      <v-card-subtitle> Netlify Embeds Serverless functions</v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    <v-card class="" width="244">
      <v-img
        class="ma-3"
        height="200px"
        src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*UWpmhI3AEdFY7gjHIZH-2w.png"
        cover
      ></v-img>

      <v-card-title> PWA</v-card-title>

      <v-card-subtitle> Progressive Web Aplication</v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
           
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>
  <script setup>
import { ref } from "vue";
const show = ref(false);
</script>