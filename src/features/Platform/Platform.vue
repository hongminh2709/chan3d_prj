<script setup>
import { ref } from "vue";
import SectionMain from "@/components/SectionMain.vue";
import Button from "@/components/Button.vue";

const listPlatform = [
  {
    id: 0,
    text: "无需任何成本，只需下载客户端，即可免费体验。",
  },
  {
    id: 1,
    text: "操作简单，易学易用，1天即可承接各种三维场景项目。",
  },
  {
    id: 2,
    text: "可视化操作、拖拽式配置、专业效果的快速交付平台。",
  },
  {
    id: 3,
    text: "您的客户资源、您的专业设计、快速交付平台助您成功。",
  },
];
</script>

<template>
  <div class="platform">
    <SectionMain>
      <h2>我们是谁</h2>
      <div class="des">无需编程交付一流纯三维空间设计</div>
      <div class="platform-ct">
        <div class="platform-ct__img" data-aos="slide-right">
          <img src="/src/assets/platform-left.png" alt="" />
        </div>
        <div class="platform-ct__text" data-aos="slide-left">
          <div class="des">
            知了云展专业为设计师和展厅从业人士打造一款将设计方案快速在线交付的平台工具，一个赋予三维项目各种交互功能的平台（会议系统、热点系统、材质编辑系统、动画系统）。一个可以在线设计展馆的设计平台（云展、画展类场景直接在线设计、墙体隔断、展台布置、无需其他三维建模软件）。
          </div>
          <ul>
            <li v-for="(item, index) in listPlatform" :key="index">
              <img src="/src/assets/icon-tick.svg" alt="" />
              {{ item.text }}
            </li>
          </ul>
          <div class="button">
            <Button
              :isAnimateInOut="true"
              class="btn-platform"
              label="下载客户端"
            />
            <Button
              :isAnimateInOut="true"
              class="btn-platform"
              label="网页布展"
            />
          </div>
        </div>
      </div>
    </SectionMain>
  </div>
</template>

<style scoped lang="scss">
.platform {
  padding: 64px 0 92px;
  h2 {
    font-size: 28px;
    text-align: center;
  }
  .des {
    color: #666666;
    font-size: 16px;
    text-align: center;
  }
  .platform-ct {
    margin-top: 36px;
    display: flex;
    justify-content: space-between;
    &__img {
      width: 550px;
      height: 520px;
    }
    &__text {
      padding-top: 60px;
      width: calc(100% - 620px);
      .button {
        .btn-platform {
          position: relative;
          width: 140px;
          height: 48px;
          overflow: hidden;
          background-color: #0f7bff;
          background: #0f7bff;
          line-height: 48px;
          border-radius: 4px;
          color: #fff;
          margin: 0 10px;
          border-color: transparent;
        }
      }
      .des {
        text-align: left;
        color: #333;
        line-height: 2em;
        margin-bottom: 24px;
        text-indent: 36px;
      }
      font-size: 16px;
      ul {
        padding-left: 0;
        li {
          list-style-type: none;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>
