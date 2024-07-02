import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  const todos = ref(JSON.parse(localStorage.getItem('todos') || '[]'));

  const addTodo = (text) => {
    if (text.trim()!== '') {
      todos.value.push({ text, done: false });
      localStorage.setItem('todos', JSON.stringify(todos.value));
    }
  };

  const removeTodo = (index) => {
    if (index >= 0 && index < todos.value.length) {
      todos.value.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todos.value));
    }
  };

  const toggleTodo = (index) => {
    if (index >= 0 && index < todos.value.length) {
      todos.value[index].done =!todos.value[index].done;
      localStorage.setItem('todos', JSON.stringify(todos.value));
    }
  };

  const unfinishedTodos = computed(() => {
    return todos.value.filter(todo =>!todo.done).length;
  });

  return { todos, addTodo, removeTodo, toggleTodo, unfinishedTodos };
});