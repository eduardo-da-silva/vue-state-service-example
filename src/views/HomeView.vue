<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useTaskStore } from "@/stores/task";

export default {
  data() {
    return {
      title: "Lista de tarefas",
      newTask: "",
    };
  },
  computed: {
    ...mapStores(useTaskStore),
    ...mapState(useTaskStore, ["todo"]),
  },
  methods: {
    ...mapActions(useTaskStore, ["addTaskToState"]),
    addTask() {
      this.addTaskToState(this.newTask);
    },
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <input type="text" v-model="newTask" />
  <button @click="addTask">Adicionar</button>
  <div class="lista-tarefas">
    <div class="item" v-for="item of todo" :key="item.id">
      {{ item.description }}
    </div>
    {{ todo }}
  </div>
</template>

<style scoped>
.lista-tarefas {
  border: 1px solid gray;
  padding: 10px;
  margin-top: 20px;
}
.item {
  border: 1px solid gray;
  padding: 10px;
  margin: 20px;
  background-color: antiquewhite;
}
</style>
