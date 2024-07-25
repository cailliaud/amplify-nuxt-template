<template>
  <UCard>
    <template #header>
      <h1>Welcome</h1>
    </template>

    Lorem ipsum ....
    <template #footer>
      <ULink
          to="/about"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >
        About
      </ULink>
    </template>
  </UCard>
</template>
<script setup lang="ts">
</script>
