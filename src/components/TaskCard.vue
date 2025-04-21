<script setup lang="ts">
import type { Task } from '@/types/task'

const props = defineProps<{
  task: Task
}>()

const emit = defineEmits<{
  (e: 'toggleStatus', id: number): void
  (e: 'deleteTask', id: number): void
}>()
</script>

<template>
  <div
    class="task-card group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
    :class="{ 'bg-green-50 border-green-100': task.done }"
  >
    <div class="flex items-center gap-4">
      <input
        type="checkbox"
        :checked="task.done"
        @change="emit('toggleStatus', task.id)"
        class="w-5 h-5 rounded-full border-2 border-indigo-400 text-indigo-600 focus:ring-indigo-500 transition-all duration-200"
      />
      <span
        class="flex-1 font-medium transition-all duration-200"
        :class="{ 'line-through text-gray-400': task.done }"
      >
        {{ task.title }}
      </span>
      <button
        @click="emit('deleteTask', task.id)"
        class="p-2 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-500 transition-all duration-200"
        title="Delete task"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
