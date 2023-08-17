<script setup>
import { ref } from "vue";
import Button from "@/components/Button.vue";
import Navbar from "@/components/Navbar.vue";

defineProps({
  msg: String,
});

const count = ref(0);
const menu = [
  {
    id: 0,
    label: "首页",
  },
  {
    id: 1,
    label: "解决方案",
  },
  {
    id: 2,
    label: "成功案例",
  },
  {
    id: 3,
    label: "帮助文档",
  },
];
</script>

<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="hd-content">
          <div class="hd-content__logo">
            <a href="/"> <img src="/src/assets/logo.svg" alt="" /></a>
            <span>知了云展</span>
          </div>
          <div class="hd-content__nav">
            <Navbar :menu="menu" />
          </div>
          <div class="cooperation"><Button label="合作模式" /></div>
        </div>
        <div class="hd-user">
          <div class="hd-user__vip">
            <img src="/src/assets/crown.png" alt="" />
            <p>升级VIP</p>
          </div>
          <div class="hd-user__regis">
            <span class="re-sp">登录</span>
            <span>|</span>
            <span class="re-sp">登录</span>
          </div>
        </div>
      </div>
    </div>
    <slot />
    <div class="hm-fixed">
      <div class="hm-fixed__bg">
        <div class="hm-fixed__notice"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.9);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  box-shadow: 0px 7px 8px 0px rgba(151, 151, 151, 0.19);
  .container {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    justify-content: space-between;
  }
  .hd-content {
    display: flex;
    align-items: center;
    &__logo {
      display: flex;
      align-items: center;
      margin-right: 50px;
      a {
        width: 36px;
        height: 36px;
      }
      span {
        padding-left: 10px;
        color: #0f7bff;
        font-weight: bold;
        font-size: 20px;
      }
    }
    &__nav {
      display: flex;
      align-items: center;
    }
    .cooperation {
      .base-button {
        width: 100%;
        height: 100%;
        margin-right: 0;
        color: #ffa200;
        font-weight: bold;
        width: 98px;
        height: 38px;
        line-height: 38px;
        background-color: transparent;
        border-radius: 6px;
        border: 1px solid #ffa200;
      }
    }
  }
  .hd-user {
    display: flex;
    align-items: center;
    &__vip {
      text-align: center;
      padding-right: 25px;
      img {
        width: 36px;
        margin: 0 auto;
      }
      p {
        line-height: 1;
        font-weight: 600;
        font-size: 12px;
      }
    }
    &__regis {
      span {
        padding: 0 10px;
        cursor: pointer;
        transition: 0.1s linear;
        &.re-sp {
          &:hover {
            color: #0f7bff;
          }
        }
      }
    }
  }
}
.hm-fixed {
  position: fixed !important;
  right: 0;
  bottom: 30%;
  z-index: 9999 !important;
  display: block;
  width: 44px;
  height: 84px;
  &__bg {
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("../assets/text-hm.png");
    background-size: cover;
    &:hover {
      box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.5) !important;
    }
  }
  &__notice {
    width: 28px;
    height: 25px;
    left: 9px;
    top: 6px;
    position: absolute;
    background-image: url("../assets/icon-hm.png");
    background-size: cover;
  }
}
</style>
