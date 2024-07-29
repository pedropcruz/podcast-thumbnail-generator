<template>
  <div class="text-center">
    <div
      class="container px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:gap-12 items-center mb-8"
    >
      <ThumbnailPreview
        ref="previewRef"
        :episode-number="episodeNumber"
        :podcast-title="podcastTitle"
        :title-size="titleSize"
      />
      <ThumbnailControls
        :episode-number="episodeNumber"
        :podcast-title="podcastTitle"
        :title-size="titleSize"
        @update:episodeNumber="episodeNumber = $event"
        @update:podcastTitle="podcastTitle = $event"
        @update:title-size="titleSize = $event"
      />
    </div>
    <Button @click="downloadThumbnail">Download PNG</Button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import ThumbnailPreview from "~/components/ThumbnailPreview/index.vue";
import ThumbnailControls from "~/components/ThumbnailControls/index.vue";
import { Button } from "~/components/ui/button";

import { generateThumbnail } from "~/lib/thumbnailGenerator";

const episodeNumber = ref(1);
const podcastTitle = ref("Título do Podcast");
const titleSize = ref(18);
const previewRef = ref<InstanceType<typeof ThumbnailPreview> | null>(null);

const downloadThumbnail = async () => {
  if (!previewRef.value?.$el) return;

  try {
    await generateThumbnail(previewRef.value.$el, episodeNumber.value);
  } catch (error) {
    console.error("Erro ao gerar a imagem:", error);
  }
};
</script>
