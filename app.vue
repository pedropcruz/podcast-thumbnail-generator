<script setup lang="ts">
import ImageGenerator from "./components/ImageGenerator/index.vue";
</script>

<template>
  <main class="container">
    <h1 class="text-3xl font-bold mb-8">
      Devsplan Podcast Thumbnail Generator
    </h1>
    <ImageGenerator />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
