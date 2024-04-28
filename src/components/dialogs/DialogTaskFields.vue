<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogTaskFields" max-width="400" persistent>
      <v-card>
        <v-card-title>Edit task</v-card-title>
        <v-card-text>
          <v-text-field label="Title" v-model="props.task.title" />
          <v-text-field label="Desciption" v-model="props.task.description" />

          <v-menu v-model="menu">
            <template v-slot:activator="{ active }">
              <v-text-field :value="due" v-on="active" label="Due date" prepend-icon="date_range" @focus="menu = true" />
            </template>
            <v-row justify="space-around">
              <v-date-picker color="primary" v-model="due" @input="menu = true"></v-date-picker>
            </v-row>
          </v-menu>

        </v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn> Cancelar </v-btn>

          <v-btn variant="elevated" @click="taskStore.updatetask()"> OK </v-btn>

        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useTaskStore } from '@/store/task'
const taskStore = useTaskStore();
// import { useDate } from 'vuetify'

// const date = useDate()

// const formatData = date.format('AAAA-MM-DD', 'fullDateWithWeekday')


const props = defineProps({
  task: Object
});

// const due = ref(null)
</script>