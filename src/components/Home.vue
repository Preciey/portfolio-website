<template>
  <div class="min-h-screen flex bg-gray-200">
    <!-- Hero Section -->
    <section class="flex-1 flex flex-col items-center justify-center text-center px-6">
      <h1 class="text-5xl font-extrabold text-teal-700 mb-4">Precedence Ratambani</h1>
      <p class="text-lg text-gray-600 max-w-2xl mb-6">
        A passionate developer building modern web experiences with Vue & Tailwind CSS.
      </p>
      <div class="flex space-x-6 mb-6">
        <a href="https://www.linkedin.com/in/precedence-ratambani-612a611a8/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/Images/icons8-linkedin-50.png" alt="LinkedIn" class="inline h-10 w-10 hover:scale-110 transition-transform"/>
        </a>

        <a href="https://github.com/Preciey" target="_blank" rel="noopener noreferrer">
       <img src="../assets/Images/icons8-github-64.png" alt="github" class="inline h-10 w-10 hover:scale-110 transition-transform" />
       </a>

         <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
        <img src="../assets/Images/icons8-mail-48.png" alt="mail" class="inline h-10 w-10 hover:scale-110 transition-transform" />
        </a>

      </div>
      <div class="flex gap-4">
        <a href="#projects" class="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition">
          View Projects
        </a>
      </div>
    </section>
    <div class="flex-1 flex items-center justify-center p-6">
      <img
        src="../assets/Images/undraw_remote-worker_0l91.svg"
        alt="Hero Image"
        class="w-full p-6 max-w-3xl"
      />
    </div>

    <!-- Footer -->
  </div>
  <div class="min-h-screen flex bg-gray-300">
    <section></section>
  </div>
  <footer class="p-6 bg-gray-100 text-center text-sm text-gray-500">
    © {{ new Date().getFullYear() }} Preciey. All rights reserved.
  </footer>
</template>

<script setup>
defineOptions({
  name: 'HomeSection',
})
</script>
