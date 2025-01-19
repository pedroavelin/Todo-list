// Utilities
import { defineStore } from 'pinia';
import * as XLSX from 'xlsx';
import { useAlertStore } from './alert';
import moment from 'moment';
const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
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
        done: false,
        dateCreat: this.formatDate(),
        dataEnd: null
      });
      this.saveLocalDate();
      alertStore.notifyAlertCreated();
      this.ordenarTarefasPorData(this.tasks);
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
    },

    formatDate(){
      let data = moment().format('DD-MM-YYYY')
      return data
    },
    
    ordenarTarefasPorData(tasks) {
      const tasksCopy = [...tasks];
      const sortedTasks = tasksCopy.sort((a, b) => {
        const dateA = moment(a.dateCreat, 'DD-MM-YYYY, h:mm:ss a');
        const dateB = moment(b.dateCreat, 'DD-MM-YYYY, h:mm:ss a');
        return dateA - dateB;
      });

      // console.log(sortedTasks);
      // Atualizar o estado com as tarefas ordenadas
      this.tasks = sortedTasks;
    },
    
    exportTasksToExcel() {
      const wb = XLSX.utils.book_new();

      // Criar uma planilha
      const ws = XLSX.utils.json_to_sheet(this.tasks);

      // Adicionar a planilha ao livro de trabalho
      XLSX.utils.book_append_sheet(wb, ws, 'Tarefas');

      // Salvar o arquivo Excel
      XLSX.writeFile(wb, 'tarefas.xlsx');
    }
  },
})