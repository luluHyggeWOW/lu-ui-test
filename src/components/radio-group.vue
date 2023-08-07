<template>
  <div class="lu-radio-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
const props = defineProps({
  modelValue: null,
});
provide("message", "Hello from parent");
</script>

<style >
</style>
<script lang="ts">
export default {
  name: "oneRadioGroup",
};
</script>
