<script setup>
import { ref } from "vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from "@/components/SectionMain.vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <div>day la home vue</div>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<style scoped lang="scss"></style>
