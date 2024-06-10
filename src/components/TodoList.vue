<script setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore.js';

const store = useTodoStore();
const newTodo = ref('');

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    store.addTodo(newTodo.value);
    newTodo.value = '';
  }
};

const removeTodo = (index) => {
  store.removeTodo(index);
};

const toggleTodo = (index) => {
  store.toggleTodo(index);
};

const todos = store.todos;
const unfinishedTodos = store.unfinishedTodos;
</script>

<template>
  <div class="todo-list">
    <h1>Todo List (Daftar Kegiatan)</h1>
    <br />
    <br />
    <div class="input-group">
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Tambahkan Daftar Kegiatan Baru" />
      <button @click="addTodo" class="add-button">Tambah</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" :class="{ done: todo.done }">
        <span>{{ todo.text }}</span>
        <div class="actions">
          <button @click="toggleTodo(index)" class="complete-button">
            {{ todo.done ? 'Tandai Belum Selesai' : 'Tandai Sebagai Selesai' }}
          </button>
          <button @click="removeTodo(index)" class="delete-button">Hapus</button>
        </div>
      </li>
    </ul>
    <br>
    <p>Jumlah Tugas yang Belum Selesai : {{ unfinishedTodos }}</p>
  </div>
</template>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.todo-list h1 {
  text-align: center;
}

.input-group {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.todo-list input {
  width: calc(100% - 80px);
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-button {
  padding: 10px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #1976d2;
}

.todo-list ul {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.todo-list li.done span {
  text-decoration: line-through;
  color: #999;
}

.actions {
  display: flex;
  gap: 10px;
}

.complete-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.complete-button:hover {
  background-color: #45a049;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #d32f2f;
}
</style>