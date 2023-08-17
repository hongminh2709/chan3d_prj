<script setup>
import { ref } from "vue";
const props = defineProps({
  label: {
    type: [String, Number],
    default: null,
  },
  type: {
    type: String,
    required: false,
  },
  isAnimateInOut: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <button class="base-button" :type="type">
    <span>
      {{ label }}
    </span>
    <div v-if="isAnimateInOut" class="com-anim"></div>
  </button>
</template>

<style scoped lang="scss">
.base-button {
  position: relative;
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
  border-radius: 2px;
  span {
    z-index: 9;
  }
  .com-anim {
    transform: translateY(-50%) translateX(-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    animation: anim-out 1.3s infinite;
    &::before {
      position: relative;
      content: "";
      display: block;
      margin-top: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 50%;
      animation: home-anim-out-pseudo 1.6s infinite;
      z-index: 2;
    }
  }
}
</style>
