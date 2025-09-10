<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="flex-1 flex flex-col items-center justify-center text-center px-6">
      <h1 class="text-5xl font-bold text-gray-900 mb-4">
        Hi, I’m Preciey 👋
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mb-6">
        A passionate developer building modern web experiences with Vue & Tailwind CSS.
      </p>
      <div class="flex gap-4">
        <a
          href="#projects"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
        >
          Contact Me
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="p-6 bg-gray-100 text-center text-sm text-gray-500">
      © {{ new Date().getFullYear() }} Preciey. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
// Nothing fancy here yet — just a clean setup
</script>

<style scoped>
/* You can add custom CSS overrides here if needed */
</style>
