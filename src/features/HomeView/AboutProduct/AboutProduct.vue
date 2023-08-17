<script setup>
import { ref } from "vue";
import SectionMain from "@/components/SectionMain.vue";
import AboutProductElement from "@/features/HomeView/AboutProduct/AboutProductElement.vue";
import shareIcon from "@/assets/icon-share.png";
import funIcon from "@/assets/icon-fun.png";
import easyIcon from "@/assets/icon-easy.png";

const aboutProducts = [
  {
    id: 0,
    url: shareIcon,
    name: "轻分享",
    des: "只需发送展厅链接或嵌入您的网站中，客户便可以在任何设备上网页浏览。",
  },
  {
    id: 1,
    url: funIcon,
    name: "高互动",
    des: "一流的漫游互动将帮助您在任何行业取得成功，增强您作品的竞争力，打动客户并给他们留下深刻的印象。",
  },
  {
    id: 2,
    url: easyIcon,
    name: "易上手",
    des: "知了云展与国内常用的建模工具集成在一起，您无需更改工作流程，快速上手。",
  },
];
</script>

<template>
  <div class="product">
    <SectionMain>
      <div class="about-product">
        <AboutProductElement :aboutProducts="aboutProducts" />
      </div>
    </SectionMain>
    <div class="space-text">
      <h2 class="space-text__title" data-aos="flip-left">
        零成本快速展示您的空间设计
      </h2>
      <div class="space-text__des">知了云展轻松呈现逼真的三维漫游效果</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product {
  background: #f3f3f3;
  padding-top: 40px;
}
.about-product {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #fff;
}
.space-text {
  padding: 40px 0;
  &__title {
    text-align: center;
    font-size: 24px;
    color: #333333;
    margin-bottom: 6px;
  }
  &__des {
    color: #666666;
    font-size: 16px;
    text-align: center;
  }
}
</style>
