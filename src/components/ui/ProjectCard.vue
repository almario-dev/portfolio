<template>
  <div class="bg-erie-black p-6 rounded-xl hover:shadow-xl transition">
    <div class="flex justify-between items-start mb-3">
      <h3 class="text-xl font-semibold" v-html="name"></h3>
      <span v-if="collab" class="" title="Team Project">
        <Icon icon="typcn:group" class="size-4 inline ml-2 text-gray-300" />
      </span>
    </div>

    <p class="text-sm text-gray-400 mb-4" v-html="description"></p>
    <div class="flex gap-2 mb-4 flex-wrap">
      <div
        v-for="(tech, i) in techStack"
        :key="i"
        class="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all flex items-center justify-center shadow-md"
        :title="tech.name"
      >
        <Icon :icon="tech.icon" class="w-6 h-6 text-white" />
      </div>
    </div>
    <!-- <a href="#" class="text-blue-400 text-sm underline">Demo</a> -->
  </div>
</template>

<script setup lang="ts">
import { TechIconsRegistry } from '@/stores/icons'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    description: string
    tech?: string[]
    collab?: boolean
  }>(),
  {
    name: 'Project Name',
    description: 'Project Description',
    tech: () => [],
    collab: false,
  },
)

const techStack = computed(() => {
  return props.tech
    ?.map((tech) => {
      const icon = TechIconsRegistry[tech] || null

      if (!icon) return null

      return { icon, name: tech }
    })
    .filter((t) => t !== null)
})
</script>
