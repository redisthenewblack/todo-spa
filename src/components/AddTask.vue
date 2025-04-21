<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()
const newTaskTitle = ref('')

const addNewTask = () => {
  if (newTaskTitle.value.trim()) {
    taskStore.addTask(newTaskTitle.value)
    newTaskTitle.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="addNewTask" class="mb-8">
    <div class="flex gap-4">
      <input
        v-model="newTaskTitle"
        type="text"
        placeholder="Add a new task..."
        class="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
      />
      <button
        type="submit"
        class="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-all duration-200"
      >
        Add Task
      </button>
    </div>
  </form>
</template>
