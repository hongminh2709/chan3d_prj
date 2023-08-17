<script setup>
import { ref } from "vue";
import Button from "@/components/Button.vue";

const isShowAlert = ref(true);
</script>

<template>
  <div class="media-video">
    <div class="media-alert" v-if="isShowAlert">
      <div class="alert-icon">
        <img src="/src/assets/red-.png" alt="" />
      </div>
      <div class="media-content">
        <div class="alert-message">
          <div>
            【新本来袭】新增360度单体展示、多人协同布展、付费展厅、在线客服、信息提示插件等功能，现免费开放使用，快来体验！<a
              class="link"
              >了解详情</a
            >
          </div>
        </div>
      </div>
      <button
        type="button"
        class="alert-close"
        @click="isShowAlert = !isShowAlert"
      >
        <span role="img" aria-label="close" class="close-alert"
          ><svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="close"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
            ></path></svg
        ></span>
      </button>
    </div>
    <video
      preload="auto"
      data-autoplay="true"
      autoplay="true"
      loop="true"
      playsinline="true"
      muted
      class="center"
    >
      <source
        src="https://cloud.chan3d.com/cdn/website/video/lead-30_1.mp4"
        type="video/mp4"
      />
      <source
        src="https://cloud.chan3d.com/cdn/website/video/lead-btrate1.mp4"
        media="all and (max-width: 767px)"
        type="video/mp4"
      />
    </video>
    <div class="desc center">
      <div class="triangle-bottom"></div>
      <div class="title">人人都会用的虚拟场景交付平台</div>
      <div class="sub-title">2.6版本全新升级</div>
    </div>
    <div class="form">
      <form class="">
        <input type="text" style="width: 0px; height: 0px; border: none" />
        <input type="password" style="width: 0px; height: 0px; border: none" />
        <div class="media-form" style="gap: 8px">
          <div class="media-form-item" style="">
            <input
              placeholder="输入手机号"
              type="text"
              id="phone"
              class="form-input"
              value=""
            />
          </div>
          <div class="media-form-item verify" style="">
            <input
              placeholder="输入验证码"
              type="text"
              id="activeCode"
              class="form-input"
              value=""
            />
            <Button label="获取验证码" />
          </div>
          <div class="media-form-item" style="">
            <input
              type="password"
              placeholder="输入密码"
              id="password"
              class="form-input"
            />
          </div>
          <div class="media-form-item">
            <Button class="submit" type="submit" label="立即注册" />
          </div>
        </div>
      </form>
    </div>
    <div class="download">
      <Button :isAnimateInOut="true" class="btn-download" label="下载客户端" />
      <Button :isAnimateInOut="true" class="btn-download" label="网页布展" />
    </div>
    <div class="mouse-scroll">
      <img src="/src/assets/sc-mouse.gif" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.media-video {
  height: 600px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: linear-gradient(180deg, black, transparent);
  .media-alert {
    display: flex;
    align-items: center;
    z-index: 2;
    background-color: #fff;
    border: none;
    margin-top: 30px;
    width: 1308px;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    padding: 8px 15px;
    border-radius: 2px;
    .alert-icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .media-content {
      .link {
        color: #f88e06;
        margin-left: 14px;
        cursor: pointer;
      }
    }
  }
  .alert-close {
    margin-left: 8px;
    padding: 0;
    overflow: hidden;
    font-size: 12px;
    line-height: 12px;
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 15px;
    cursor: pointer;
    .close-alert {
      display: inline-block;
      color: rgba(0, 0, 0, 0.45);
      transition: color 0.3s;
      font-style: normal;
      line-height: 0;
      text-align: center;
      text-transform: none;
      vertical-align: -0.125em;
      text-rendering: optimizeLegibility;
    }
  }
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .desc {
    text-align: center;
    color: #fff;
    height: 600px;
    width: 100%;
    opacity: 1;
    background-color: rgba(15, 123, 255, 0.4);
    .triangle-bottom {
      width: 0;
      height: 0;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-top: 230px solid transparent;
      border-left: 1440px solid #f3f3f3;
      border-right: 1440px solid #f3f3f3;
    }
    .title {
      font-family: "SourceHanSansCN-Medium";
      font-weight: 600;
      font-size: 36px;
      margin-bottom: 20px;
      padding-top: 200px;
    }
    .sub-title {
      font-family: "SourceHanSansCN-Regular";
      margin: 0 0 26px;
      font-size: 22px;
    }
  }
  .form {
    position: absolute;
    padding: 0 10%;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    bottom: 220px;
    width: 1200px;
    left: 50%;
    transition: all 0.3s;
    transform: translateX(-50%);
    .media-form {
      display: inline-flex;
      align-items: center;
      .media-form-item {
        .submit {
          width: 140px;
          height: 48px;
          background-color: #0066e9;
          border-radius: 4px;
          color: #fff;
          text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
          border-color: #1890ff;
        }
        &.verify {
          display: flex;
          position: relative;
          .form-input {
            width: 232px;
          }
          .base-button {
            border-color: transparent;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 12px;
            color: #1890ff;
          }
        }
        .form-input {
          background: #fff;
          height: 48px;
          width: 212px;
          border-radius: 4px;
          color: #333;
          padding: 4px 12px;
          box-sizing: border-box;
          display: inline-block;
          &::placeholder {
            color: #666;
            opacity: 0.5;
          }
        }
      }
    }
  }
  .download {
    position: absolute;
    left: 50%;
    transition: all 0.3s;
    transform: translateX(-50%);
    bottom: 130px;
    display: flex;
    justify-content: center;
    .btn-download {
      position: relative;
      width: 140px;
      height: 48px;
      overflow: hidden;
      background-color: #ffc400;
      background: #ffc400;
      line-height: 48px;
      border-radius: 4px;
      color: #fff;
      margin: 0 10px;
      border-color: transparent;
    }
  }
  .mouse-scroll {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    img {
      width: 20px;
    }
  }
}
</style>
