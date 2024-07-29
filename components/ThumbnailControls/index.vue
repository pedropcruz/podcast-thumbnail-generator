<template>
  <div class="controls">
    <div>
      <Label>Número do Episódio:</Label>
      <Input
        placeholder="Número do Episódio"
        :model-value="String(episodeNumber)"
        @update:model-value="(value) => updateEpisodeNumber(value as string)"
        type="number"
        min="1"
      />
    </div>
    <div>
      <Label>Título do Podcast:</Label>
      <Input
        placeholder="Título do Podcast"
        :model-value="podcastTitle"
        @update:model-value="(value) => updatePodcastTitle(value as string)"
        type="text"
      />
    </div>
    <div>
      <Label>Tamanho do Título:</Label>
      <Slider
        :default-value="[titleSize]"
        :min="1"
        :max="35"
        @update:model-value="(value) => value && updateTitleSize(value[0])"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import Slider from "../ui/slider/Slider.vue";

const props = defineProps<{
  episodeNumber: number;
  podcastTitle: string;
  titleSize: number;
}>();

const emit = defineEmits<{
  (e: "update:episodeNumber", value: number): void;
  (e: "update:podcastTitle", value: string): void;
  (e: "update:titleSize", value: number): void;
}>();

const updateEpisodeNumber = (value: string) => {
  const numValue = parseInt(value, 10);
  if (!isNaN(numValue)) {
    emit("update:episodeNumber", numValue);
  }
};

const updatePodcastTitle = (value: string) => {
  emit("update:podcastTitle", value);
};

const updateTitleSize = (value: number) => {
  emit("update:titleSize", value);
};
</script>

<style scoped>
.controls {
  text-align: left;
}
</style>
