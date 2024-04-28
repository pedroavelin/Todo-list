<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogTaskFields" max-width="400" persistent>
      <v-card
      prepend-icon="mdi-update"
        text="Edite dos campos abaixo para actualizar as informações da sua tarefa."
        title="Actualizar tarefa"
      >
        
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field label="Title" v-model="props.task.title" />
          <v-text-field label="Desciption" v-model="props.task.description" />
          <v-text-field label="Data finished" v-model="props.task.dataEnd" />
          
          <!-- <v-date-picker v-model="props.task.dataEnd" color="primary"></v-date-picker> -->

          <!-- <v-menu v-model="menu">
            <template v-slot:activator="{ active }">
              <v-text-field :value="due" v-on="active" label="Due date" prepend-icon="date_range" @focus="menu = true" />
            </template>
            <v-row justify="space-around">
              <v-date-picker color="primary" v-model="due" @input="menu = true"></v-date-picker>
            </v-row>
          </v-menu> -->

        </v-card-text>
        <v-divider></v-divider>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn color="warning" density="comfortable" @click="cancelar.value = false"> Cancelar </v-btn>
          <v-btn color="success" variant="elevated" @click="taskStore.updatetask()"> Actualizar </v-btn>

        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { useTaskStore } from '@/store/task'
const taskStore = useTaskStore();
const cancelar = ref(false);
const props = defineProps({
  task: Object
});

// const due = ref(null)
</script>