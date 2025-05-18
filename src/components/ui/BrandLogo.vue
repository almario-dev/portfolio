<template>
  <img :src="src" alt="Logo" class="w-[3rem]" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { LogoTeal, LogoWhite, LogoNeon } from '@/components/images'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'teal' | 'white' | 'neon'
  }>(),
  {
    variant: 'neon',
  },
)

const src = computed(() => {
  switch (props.variant) {
    case 'teal':
      return LogoTeal
    case 'white':
      return LogoWhite
    default:
      return LogoNeon
  }
})
</script>
