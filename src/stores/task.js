import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

export const useTaskStore = defineStore({
  id: "task",
  state: () => ({
    todo: [
      {
        id: "e6bb06d6-8c41-4f9d-99aa-c9a2239790d5",
        description: "Tarefa 1",
      },
      {
        id: "8ff73115-6ef1-4668-be1b-7f22b3757c44",
        description: "Tarefa 2",
      },
    ],
  }),
  actions: {
    addTaskToState(newTask) {
      const task = {
        id: uuid(),
        description: newTask,
      };
      this.todo.push(task);
    },
  },
});
