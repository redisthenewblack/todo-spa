<script setup lang="ts">
import { onMounted } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import TaskCard from '@/components/TaskCard.vue'
import TaskFilters from '@/components/TaskFilters.vue'
import AddTask from '@/components/AddTask.vue'

const taskStore = useTaskStore()

onMounted(async () => {
  await taskStore.initializeTasks()
})
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="space-y-6">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold text-gray-900">My Tasks</h2>
        <span class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-xl font-medium">
          {{ taskStore.tasks.length }} tasks
        </span>
      </div>

      <AddTask />
      <TaskFilters />

      <div class="space-y-4">
        <TaskCard
          v-for="task in taskStore.filteredTasks"
          :key="task.id"
          :task="task"
          @toggle-status="taskStore.toggleTaskStatus"
          @delete-task="taskStore.deleteTask"
        />
      </div>

      <div
        v-if="taskStore.filteredTasks.length === 0"
        class="text-center py-12 text-gray-500 bg-gray-50 rounded-xl"
      >
        {{ taskStore.searchQuery ? 'No tasks found matching your search' : 'No tasks available' }}
      </div>
    </div>
  </div>
</template>
