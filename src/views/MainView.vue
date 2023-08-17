<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from "@/components/SectionMain.vue";
import MediaVideo from "@/features/HomeView/MediaForm.vue";
import AboutProduct from "@/features/HomeView/AboutProduct/AboutProduct.vue";
import CaseSection from "@/features/CaseSection/CaseSection.vue";
import Platform from "@/features/Platform/Platform.vue";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <LayoutAuthenticated>
    <div class="page-main">
      <MediaVideo />
      <AboutProduct />
      <CaseSection />
      <Platform />
    </div>
  </LayoutAuthenticated>
</template>

<style scoped lang="scss">
.page-main {
  min-width: 1380px;
  width: 100%;
  overflow: hidden;
}
</style>
