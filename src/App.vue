<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
    <div class="container mx-auto min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl border border-gray-100">
          <div class="p-8">
            <h1 class="mb-12 text-center text-3xl font-bold text-gray-900">✨ Tasks</h1>
            <RouterView />
            <div class="test visually-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>
