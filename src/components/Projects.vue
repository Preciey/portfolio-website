<template>
  <div class="flex bg-gray-200">
    <section class="flex-1 flex items-center justify-center p-6">
      <img
        src="../assets/Images/undraw_personal-website_kz7a.svg"
        alt="Project Image"
        class="w-full p-6 max-w-3xl"
      />
    </section>
    <section class="flex-1 flex flex-col items-center justify-center text-center px-6">
      <h1 class="text-5xl font-extrabold text-teal-700 mb-4">Projects</h1>
      <p class="text-lg text-gray-600 max-w-2xl mb-6">
        I am a software developer with experience in building web applications using modern
        technologies like Vue.js, Tailwind CSS, and Node.js.
      </p>
    </section>
  </div>
  <div class="w-full bg-gray-200">
    <section id="projects" class="py-16 px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-teal-300/20 p-6 rounded-lg shadow-md flex flex-col justify-between gap-y-2 h-60">
          <h3 class="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p class="text-gray-600 mb-4">
            A responsive personal portfolio built with Vue.js and Tailwind CSS, designed to showcase
            projects, skills, and experience in a clean, modern design.
          </p>
          <div class="w-full">
            <a
              href="https://github.com/Preciey/portfolio-website"
              target="_blank"
              class=" px-4 py-2 bg-teal-700 text-white text-sm font-medium rounded hover:bg-teal-500 transition"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="bg-teal-300/20 p-6 rounded-lg shadow-md flex flex-col justify-between gap-y-2 h-60">
          <h3 class="text-xl font-semibold mb-2">E-Commerce Jewelry Store</h3>
          <p class="text-gray-600 mb-4">
            An elegant e-commerce platform for a jewelry and lifestyle brand. Includes product
            catalog, shopping cart, and secure checkout with a luxury shopping experience.
          </p>
          <!-- <div class="flex space-x-3 text-gray-700">
            <LaravelIcon class="w-5 h-5" />
            <VueIcon class="w-5 h-5" />
            <TailwindIcon class="w-5 h-5" />
          </div> -->
          <div class="w-full">
            <a
              href="https://mimiestore.co.za"
              target="_blank"
              class="px-4 py-2 bg-teal-700 text-white text-sm font-medium rounded hover:bg-teal-500 transition"
            >
              View Project
            </a>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="bg-teal-300/20 p-6 rounded-lg shadow-md flex flex-col justify-between gap-y-2 h-60">
          <h3 class="text-xl font-semibold mb-2">WordPress E-Commerce Store</h3>
          <p class="text-gray-600 mb-4">
            Designed and deployed a fully functional e-commerce store using WordPress. Customized
            the theme for a clean shopping experience, integrated payment gateways, and hosted it
            live for real customer access.
          </p>
          <div class="w-full">
            <a
              href="https://mimiestore.co.za"
              target="_blank"
              class=" px-4 py-2 bg-teal-700 text-white text-sm font-medium rounded hover:bg-teal-500 transition"
            >
              Visit Live Store
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineOptions({
  name: 'PortfolioProjects',
})
</script>
