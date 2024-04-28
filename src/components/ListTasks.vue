<template>
  <div class="ma-3">
    <v-list lines="three" select-strategy="classic">
      <v-list-subheader>Total de tarefas - {{ taskStore.totalTasks() }}</v-list-subheader>
      <v-card class="overflow-y-auto" max-height="450" v-scroll.self="onScroll">
        
        <v-list-item
          class="p-0 m-0"
          v-for="(task, index) in taskStore.tasks"
          :key="index"
          :value="index"
          @click="taskStore.toggleDoneTask(index)"
        >
          <template v-slot:prepend="{}">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="task.done" />
            </v-list-item-action>
          </template>

          <v-list-item-title>{{ task.title }} <v-icon color="success" icon="mdi mdi-calendar" size="15"/> {{task.dateCreat }}  <v-icon color="warning" icon="mdi mdi-calendar" size="15"/></v-list-item-title>
          
          <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>

          <template v-slot:append>
            <!-- START - MENU -->
            <v-menu>
              
              <template v-slot:activator="{ props }">
                <v-btn
                  color="grey-lighten-1"
                  icon="mdi-dots-vertical"
                  variant="text"
                  v-bind="props"
                >
                </v-btn>
              </template>

              <v-list>
                <v-list-item value="1" @click="taskStore.toggleEdit(index)">
                  <v-list-item-title>Editar</v-list-item-title>
                  <v-divider />
                </v-list-item>
                <v-list-item value="2" @click="taskStore.toggleDelete(index)">
                  <v-list-item-title>Eliminar</v-list-item-title>
                </v-list-item>
              </v-list>
              
            </v-menu>
          </template>
        </v-list-item>
      </v-card>
    </v-list>

    <!-- END - MENU -->
  </div>
  <DialogTasksFields :task="taskStore.tasks[taskStore.indextaskSelected]" />
  <DialogDelete />
</template>

<script setup>
import { onMounted } from "vue";
import DialogTasksFields from "@/components/dialogs/DialogTaskFields";
import DialogDelete from "@/components/dialogs/DialogDelete";
import { useTaskStore } from "@/store/task";

const taskStore = useTaskStore();
// const scrollInvoked = ref(0);


onMounted(() => {
  taskStore.getTasks();
});

const onScroll = () => {
  this.scrollInvoked++;
};
</script>