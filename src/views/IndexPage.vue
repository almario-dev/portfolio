<template>
  <IndexHeader />

  <section class="relative md:h-screen">
    <div
      class="md:absolute md:top-2/6 md:-translate-y-1/2 right-1/2 mt-8 md:mt-0 mx-auto md:right-16 w-[40vw] md:w-[28vw] aspect-square shadow-2xl shadow-prussian-blue bg-[url('@/assets/images/almario-no-bg.png')] bg-contain bg-no-repeat z-10 border-2 opacity-90 border-aqua/50 rounded-full"
      data-aos="fade-left"
      :data-aos-delay="500"
    ></div>
    <div class="text-center md:text-left py-16 px-4 sm:py-24 sm:px-6 lg:px-8 h-full w-full">
      <div class="max-w-2xl">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-3" ref="greetingsRef"></h1>

        <div class="flex justify-center md:justify-start items-center gap-6 flex-wrap my-10">
          <span
            v-for="(tech, i) in FeaturedTechnologies"
            :key="i"
            data-aos="zoom-in"
            :data-aos-delay="1000 + i * 100"
            :title="tech.name"
          >
            <Icon :icon="tech.icon" width="40" height="40" />
          </span>
        </div>

        <p
          class="text-gray-400 max-w-full px-6 md:px-0 sm:max-w-4/5 text-lg sm:text-2xl mb-12 sm:mb-16 my-16"
          data-aos="zoom-in"
          :data-aos-delay="500"
        >
          Turning ideas into sleek, scalable applications using Laravel, Vue, and Quasar — crafted
          for real-world impact and built to grow with users.
        </p>
        <a
          href="#projects"
          class="inline-block shadow-lg text-aqua bg-prussian-blue/80 hover:bg-prussian-blue px-5 py-3 rounded-lg font-semibold text-base sm:text-lg transition"
          :data-aos-delay="500"
          data-aos="zoom-in"
        >
          View My Work
        </a>
      </div>
    </div>
  </section>

  <section id="projects" class="bg-[#0B1116] py-20 px-8">
    <h2 class="text-3xl font-bold text-center mb-12">Projects</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <Project
        v-for="(project, i) in ProjectsList"
        :key="i"
        v-bind="project"
        :data-aos="i % 3 === 0 ? 'fade-right' : i % 3 === 1 ? 'fade-up' : 'fade-left'"
        data-aos-anchor-placement="center-bottom"
      />
    </div>
  </section>

  <section id="technologies" class="py-20 px-8 text-center">
    <h2 class="text-3xl font-bold mb-10">Tools & Technologies</h2>
    <Technologies :list="TechnologiesList" />
  </section>

  <section id="about" class="py-20 px-8 text-center">
    <h2 class="text-3xl font-bold mb-6">
      <span>About Me</span>
    </h2>
    <div class="flex items-center justify-center flex-col">
      <div class="bg-transparent border-2 border-gray-800 rounded-full p-1">
        <img :src="Profile" class="h-[4rem] rounded-full" />
      </div>

      <p class="text-center text-gray-400 mt-8">
        My name is <span class="text-gray-300 font-medium">Almario Miano</span>.
      </p>

      <p class="max-w-xl mx-auto text-gray-400 mt-8 mb-12">
        I've spent the past 3 years building full-stack applications with Laravel, Vue, and Quasar —
        focusing on clean code, maintainability, and scalability.
        <br />
        <br />
        <br />
        Beyond coding, I lead architecture planning and manage CI/CD pipelines for smooth, reliable
        deployments.
        <br />
        <br />
        I'm passionate about creating user-friendly, efficient applications that solve real-world
        problems.
      </p>
    </div>

    <a
      href="https://drive.google.com/file/d/1nPVDXLM3t9847UomXOKCjqhOvmZdgJuu/view?usp=sharing"
      target="_blank"
      class="inline-block text-aqua hover:bg-prussian-blue hover:text-white font-semibold py-3 px-6 rounded-md transition duration-300"
      data-aos="fade-up"
    >
      View My Resume
    </a>
  </section>

  <section id="contact" class="bg-[#0B1116] py-20 px-8 text-center flex flex-col items-center">
    <h2 class="text-3xl font-bold">Get in Touch</h2>
    <p class="text-gray-400 mt-8 mb-12">
      Let's work together — reach me at
      <a href="mailto:almariomiano@gmail.com" class="text-blue-400 underline">
        almariomiano@gmail.com
      </a>
    </p>
    <div class="flex space-x-3">
      <a
        v-for="(button, i) in AccountsList"
        :key="button.name"
        :href="button.url"
        target="_blank"
        rel="noopener noreferrer"
        :class="[
          'p-3 rounded-full flex items-center justify-center transition-colors duration-400 hover:bg-white hover:text-chinese-black',
        ]"
        :aria-label="button.name"
        data-aos="fade-left"
        :data-aos-delay="i * 100"
      >
        <Icon :icon="button.icon" width="24" height="24" />
      </a>
    </div>
  </section>

  <IndexFooter />
</template>

<script setup lang="ts">
import { IndexHeader, IndexFooter, Technologies, Project } from '@/components'
import { Profile } from '@/components/images'
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import TypeIt from 'typeit'

import { FeaturedTechnologies, TechnologiesList } from '@/stores/icons'
import { ProjectsList } from '@/stores/projects'
import { AccountsList } from '@/stores/socials'

const greetingsRef = ref(null)

onMounted(() => {
  if (!greetingsRef.value) return

  new TypeIt(greetingsRef.value, {
    speed: 150,
    // startDelay: 1000,
    waitUntilVisible: true,
    loop: true,
  })
    .type(`Hi,`)
    .pause(2000)
    .type(` I am <span class="text-aqua">Almario</span>.`)
    .pause(3000)
    .delete(100)
    .type(`I am <span class="text-aqua">Full Stack</span>`)
    .move(-11, { delay: 100 })
    .type(' a')
    .move(null, { to: 'END', delay: 50 })
    .type(`<span class="text-aqua"> Developer</span>.`)
    .pause(30000)
    .go()
})
</script>
