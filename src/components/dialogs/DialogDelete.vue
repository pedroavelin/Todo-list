<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="taskStore.showDialogDelete"
      width="auto"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Your application will relaunch automatically after the update is complete."
        title="Do you want delete this task ?"
      >
        <template v-slot:actions>
          <v-btn
          @click="dialog = false"
            text="Cancelar"
          ></v-btn>
          <v-btn
            color="warning"
            class="ms-auto"
            text="Eliminar"
           @click="taskStore.deleteTask"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { useTaskStore } from '@/store/task'
const taskStore = useTaskStore();

const dialog = false
</script>