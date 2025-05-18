<template>
  <div
    class="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center"
    v-bind="$attrs"
  >
    <div
      class="flex flex-col items-center space-y-2"
      v-for="(tech, index) in list"
      :key="index"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      :data-aos-delay="index * 100"
    >
      <Icon :icon="tech.icon" width="40" height="40" />
      <span class="text-gray-200">{{ tech.name }}</span>
    </div>
  </div>

  <div v-if="!list.length" class="text-gray-400">No technologies to display.</div>
</template>

<script setup lang="ts">
import type { Technology } from '@/types/Portfolio'
import { Icon } from '@iconify/vue'

withDefaults(
  defineProps<{
    list: Technology[]
  }>(),
  {
    list: () => [],
  },
)
</script>
