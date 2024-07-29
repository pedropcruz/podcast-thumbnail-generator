<template>
  <div ref="previewRef" class="preview">
    <img src="~/assets/logo.svg" alt="devsplan-logo" class="podcast-logo" />
    <h1 class="font-jakarta-bold text-[#22374F] text-6xl my-8">
      {{ `#${episodeNumber}` }}
    </h1>
    <p
      class="font-jakarta-bold text-[#22374F] text-center px-4"
      :style="{ fontSize: `${titleSize}px` }"
    >
      {{ episodeTitle }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  episodeNumber: number;
  episodeTitle: string;
  titleSize: number;
}>();
</script>

<style scoped>
.preview {
  width: 300px;
  height: 300px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #dfdcd4;
  background-image: url("~/assets/wave.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.podcast-logo {
  width: 100%;
  max-width: 60%;
  margin: 0 auto;
}
</style>
