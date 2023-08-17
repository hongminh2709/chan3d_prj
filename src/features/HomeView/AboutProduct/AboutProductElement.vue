<script setup>
import { ref } from "vue";
const props = defineProps({
  aboutProducts: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="product-item" v-for="(item, index) in aboutProducts" :key="index">
    <div class="product-item__icon">
      <img :src="item.url" alt="" />
    </div>
    <div class="product-item__title">
      {{ item.name }}
    </div>
    <div class="product-item__des">
      {{ item.des }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-item {
  &:hover {
    .product-item__icon {
      animation: fadeOut 1.2s linear infinite;
    }
  }
  padding: 55px;
  &__icon {
    animation: fadeOut1 1s ease 1;
    margin-bottom: 28px;
    width: 36px;
    height: 36px;
  }
  &__title {
    line-height: 28px;
    color: #333333;
    font-size: 18px;
    margin-bottom: 28px;
  }
  &__des {
    display: block;
    text-align: left;
    line-height: 28px;
    color: #666666;
  }
}
</style>
