<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <ULink  to="/"
                  active-class="text-primary"><h1>Welcome to Nuxt UI Starter</h1></ULink>
          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
        </div>
      </template>
      <slot />
      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
    </UCard>
  </UContainer>
</template>
<script setup lang="ts">
</script>
