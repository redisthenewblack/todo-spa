<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()
const searchTimeout = ref<number | null>(null)

const handleSearch = (event: Event) => {
  const query = (event.target as HTMLInputElement).value
  if (searchTimeout.value) clearTimeout(searchTimeout.value)
  searchTimeout.value = setTimeout(() => {
    taskStore.setSearchQuery(query)
  }, 300) as unknown as number
}
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-4 mb-8">
    <div class="flex-1 relative">
      <input
        type="text"
        placeholder="Search tasks..."
        class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
        @input="handleSearch"
      />
    </div>
    <div class="flex gap-2">
      <button
        v-for="status in ['all', 'active', 'completed']"
        :key="status"
        @click="taskStore.setFilterStatus(status as 'all' | 'active' | 'completed')"
        class="px-4 py-2 rounded-xl font-medium transition-all duration-200"
        :class="{
          'bg-indigo-600 text-white shadow-md': taskStore.filterStatus === status,
          'bg-gray-100 hover:bg-gray-200 text-gray-700': taskStore.filterStatus !== status,
        }"
      >
        {{ status.charAt(0).toUpperCase() + status.slice(1) }}
      </button>
    </div>
  </div>
</template>
