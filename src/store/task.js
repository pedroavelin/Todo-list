// Utilities
import { defineStore } from 'pinia';
import { useAlertStore } from './alert';
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
    updatetask(){
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

    saveLocalDate(){
      // tasks - Tasks é o nome do local storage
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
      
    getTasks(){
      let items = localStorage.getItem('tasks')
      if(items) 
        this.tasks = JSON.parse(items)
    },
    toggleDoneTask(index){
      this.tasks[index].done = !this.tasks[index].done;
      this.saveLocalDate(); 
    }
  }
})