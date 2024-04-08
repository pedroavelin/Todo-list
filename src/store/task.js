// Utilities
import { defineStore } from 'pinia';
import { useAlertStore } from './alert';
const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [
      { title: "Ir em casa do fiesta", description: "Regressar às 20h", done: true },
      { title: "Fazer compras", description: "Ir ao supermercado", done: false },
      { title: "Estudar", description: "Preparar para o exame", done: true },
    ],
    titleTaskCreating: "",
    showDialogDelete: false,
    indextaskSelected: 0,
    showDialogTaskFields: false,
  }),
  actions: {
    addTask() {
      if (this.titleTaskCreating.length < 5) return
      this.tasks.push({
        title: this.titleTaskCreating,
        done: false
      });
      this.titleTaskCreating = "";
      this.saveLocalDate();
      alertStore.notifyAlertCreated();
    },

    deleteTask() {
      this.tasks.splice(this.indextaskSelected, 1)
      this.toggleDelete();
      this.saveLocalDate();
      alertStore.notifyAlertDeleted();
    },
    updatetask() {
      this.saveLocalDate();
      this.toggleEdit();
      alertStore.notifyAlertUpdate();
    },
    toggleEdit(index) {
      console.log(index);
      this.showDialogTaskFields = !this.showDialogTaskFields;
      if (index != null) this.indextaskSelected = index;
    },

    toggleDelete(index) {
      this.showDialogDelete = !this.showDialogDelete;
      if (index != null)
        this.indextaskSelected = index;
    },

    saveLocalDate() {
      // tasks - É o nome do local storage
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },

    getTasks() {
      let items = localStorage.getItem('tasks');

      if (items)
        this.tasks = JSON.parse(items);
    },

    toggleDoneTask(index) {
      this.tasks[index].done = !this.tasks[index].done;
      this.saveLocalDate();
    },

    totalTasks() {
      let totalTasks = this.tasks.length;
      return totalTasks;
    },
    myTotalTasksDone() {
      const tasksDone = this.tasks.filter(task => task.done === true);
      const totalTaskDone = tasksDone.length;
      return totalTaskDone;
    },
    myTotalTasksNotDone() {
      const tasksDone = this.tasks.filter(task => task.done === false);
      const totalTaskDone = tasksDone.length;
      return totalTaskDone;
    }
  }
})