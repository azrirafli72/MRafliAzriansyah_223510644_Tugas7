import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([]);

  const addTodo = (text) => {
    if (text.trim() !== '') {
      todos.value.push({ text, done: false });
    }
  };

  const removeTodo = (index) => {
    if (index >= 0 && index < todos.value.length) {
      todos.value.splice(index, 1);
    }
  };

  const toggleTodo = (index) => {
    if (index >= 0 && index < todos.value.length) {
      todos.value[index].done = !todos.value[index].done;
    }
  };

  const unfinishedTodos = computed(() => {
    return todos.value.filter(todo => !todo.done).length;
  });

  return { todos, addTodo, removeTodo, toggleTodo, unfinishedTodos };
});