<template>
  <nav class="bg-gray-200 text-teal-800 shadow-md py-4 px-6 flex justify-between items-center">
    <h1 class="text-xl font-bold"><a href="/" class="hover:text-blue-600"> Preciey Ratambani</a></h1>
    <ul class="flex space-x-6">
      <RouterLink to="/" class="hover:underline">Home</RouterLink>
      <RouterLink to="/about" class="hover:underline">About</RouterLink>
      <RouterLink to="/projects" class="hover:underline">Projects</RouterLink>
    </ul>
  </nav>
</template>

<script setup>
defineOptions({
  name: 'MainNavbar'
})
// No script needed yet
</script>
