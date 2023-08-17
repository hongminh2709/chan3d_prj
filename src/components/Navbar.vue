<script setup>
import { ref } from "vue";

const props = defineProps({
  menu: {
    type: Array,
    required: true,
  },
});

const count = ref(0);
</script>

<template>
  <div v-for="(item, index) in menu" :key="index" class="item-menu">
    {{ item.label }}
  </div>
</template>

<style scoped lang="scss">
.item-menu {
  margin-right: 30px;
  font-weight: bold;
  transition: 0.2s linear;
  cursor: pointer;
  &:hover {
    color: #0066e9;
  }
}
</style>
