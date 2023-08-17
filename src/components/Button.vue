<script setup>
import { ref } from "vue";
const props = defineProps({
  label: {
    type: [String, Number],
    default: null,
  },
});

const count = ref(0);
</script>

<template>
  <button class="base-button">{{ label }}</button>
</template>

<style scoped lang="scss">
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  line-height: 1.5715;
  font-weight: 400;
  white-space: nowrap;
  user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  padding: 4px 15px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  border-color: #d9d9d9;
  background: #fff;
}
</style>
