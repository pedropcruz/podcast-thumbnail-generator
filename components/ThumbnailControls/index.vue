<template>
  <div class="controls">
    <div>
      <Label>Episode Number:</Label>
      <Input
        placeholder="Episode Number"
        :model-value="String(episodeNumber)"
        @update:model-value="(value) => updateEpisodeNumber(value as string)"
        type="number"
        min="1"
      />
    </div>
    <div>
      <Label>Episode Title:</Label>
      <Input
        placeholder="Episode Title"
        :model-value="episodeTitle"
        @update:model-value="(value) => updateEpisodeTitle(value as string)"
        type="text"
      />
    </div>
    <div>
      <Label>Title Size:</Label>
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
import { Slider } from "~/components/ui/slider";

defineProps<{
  episodeNumber: number;
  episodeTitle: string;
  titleSize: number;
}>();

const emit = defineEmits<{
  (e: "update:episodeNumber", value: number): void;
  (e: "update:episodeTitle", value: string): void;
  (e: "update:titleSize", value: number): void;
}>();

const updateEpisodeNumber = (value: string) => {
  const numValue = parseInt(value, 10);
  if (!isNaN(numValue)) {
    emit("update:episodeNumber", numValue);
  }
};

const updateEpisodeTitle = (value: string) => {
  emit("update:episodeTitle", value);
};

const updateTitleSize = (value: number) => {
  emit("update:titleSize", value);
};
</script>

<style scoped>
.controls {
  text-align: left;
}

.controls > div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.75rem;
}
</style>
