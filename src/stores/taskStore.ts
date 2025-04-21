import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Task } from '@/types/task'
import tasksData from '@/assets/tasks.json'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])
  const searchQuery = ref('')
  const filterStatus = ref<'all' | 'active' | 'completed'>('all')

  const filteredTasks = computed(() => {
    let filtered = tasks.value

    const query = searchQuery.value.trim().toLowerCase();

    return tasks.value.filter((task) => {
      const statusMatch  =
        filterStatus.value === 'all' ||
        (filterStatus.value === 'active' && !task.done) ||
        (filterStatus.value === 'completed' && task.done);

      const searchMatch = !query || task.title.toLowerCase().includes(query);

      return statusMatch && searchMatch;
    })

  })

  const initializeTasks = async () => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      tasks.value = JSON.parse(savedTasks)
    } else {
      tasks.value = tasksData
      saveTasks()
    }
  }

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(), // Простой способ генерации уникального ID
      title: title.trim(),
      done: false,
    }
    tasks.value.unshift(newTask) // Добавляем в начало списка
    saveTasks()
  }

  const deleteTask = (taskId: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== taskId)
    saveTasks()
  }

  const toggleTaskStatus = (taskId: number) => {
    const task = tasks.value.find((t) => t.id === taskId)
    if (task) {
      task.done = !task.done
      saveTasks()
    }
  }

  const setFilterStatus = (status: 'all' | 'active' | 'completed') => {
    filterStatus.value = status
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
  }

  return {
    tasks,
    filteredTasks,
    filterStatus,
    searchQuery,
    initializeTasks,
    addTask,
    deleteTask,
    toggleTaskStatus,
    setFilterStatus,
    setSearchQuery,
  }
})
