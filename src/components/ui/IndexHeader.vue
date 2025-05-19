<template>
  <header class="flex justify-between items-center px-8 py-6">
    <div class="flex items-center space-x-2">
      <Logo variant="neon" class="h-[1.6rem] w-auto" />
      <div class="text-[2rem] pt-1 font-poppins font-extrabold hidden md:flex items-end h-full">
        almario<span class="text-aqua">.dev</span>
      </div>
    </div>
    <nav class="space-x-6 text-sm">
      <a href="#projects" class="hover:text-aqua transition">Projects</a>
      <a href="#about" class="hover:text-aqua transition">About</a>
      <a href="#contact" class="hover:text-aqua transition">Contact</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Logo } from '@/components'
</script>
