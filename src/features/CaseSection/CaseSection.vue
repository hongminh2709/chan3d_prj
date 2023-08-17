<template>
  <div class="section-case-slide">
    <div class="slide-case2">
      <div class="wrapper-top">
        <div
          class="wrapper-item"
          v-for="item in activeContent.listBackground.slice(0, 3)"
          :key="item.id"
        >
          <img
            :src="item.background"
            :alt="`background${activeContent.id}`"
            class="bg active1 w-full h-full"
            :class="`bg${activeContent.id}`"
          />
          <span>{{ item.text }}</span>
        </div>
      </div>

      <div class="wrapper-bottom">
        <div
          class="wrapper-item"
          v-for="item in activeContent.listBackground.slice(-2)"
          :key="item.id"
        >
          <img
            :src="item.background"
            :alt="`background${activeContent.id}`"
            class="bg w-full h-full"
            :class="`bg${activeContent.id}`"
          />
          <span>{{ item.text }}</span>
        </div>
      </div>

      <div class="menu-list">
        <div class="menu">
          <div
            class="items"
            :class="{
              active: menu.id === activeMenu.id,
            }"
            v-for="menu in menuList"
            :key="menu.id"
            @click="() => changeActiveMenu(menu.id)"
          >
            {{ menu.text }}
          </div>
        </div>

        <div class="more">查看更多&gt;&gt;</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";

const menuList = [
  { id: 1, text: "企业展厅" },
  { id: 2, text: "数字史馆" },
  { id: 3, text: "艺术画展" },
  { id: 4, text: "党建军史" },
  { id: 5, text: "畅享创意" },
];

const listContent = [
  {
    id: 1,
    listBackground: [
      {
        id: 1,
        background:
          "https://cloud.chan3d.com/scenes/d8b49d9bd2613f42cbbf6ba9a0b1c211/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638845674909",
        text: "海迈科技云展厅",
      },
      {
        id: 2,
        background:
          "https://cloud.chan3d.com/scenes/4c9c339049f081cb24d7b7a3e7a95ad9/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638846903991",
        text: "国家生态环境科技成果转化综合服务平台展厅",
      },
      {
        id: 3,
        background:
          "https://cloud.chan3d.com/scenes/6fd1acef201f7adfaf914a9fe6a0223f/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638849238841",
        text: "内蒙河山大观超低能耗展厅",
      },
      {
        id: 4,
        background:
          "https://cloud.chan3d.com/scenes/1n3UcojTSzQQcHOxWmZdvCk4Vr6/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638857452420",
        text: "中国煤科信息公司云展厅",
      },
      {
        id: 5,
        background:
          "https://cloud.chan3d.com/scenes/1n3UcojTSzQQcHOxWmZdvCk4Vr6/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638857452420",
        text: "创维展台",
      },
    ],
  },
  {
    id: 2,
    listBackground: [
      {
        id: 1,
        background:
          "https://cloud.chan3d.com/scenes/874f7e7b3b1a30c5e76d1fe24db86993/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638857452419",
        text: "中关村未来科技展",
      },
      {
        id: 2,
        background:
          "https://cloud.chan3d.com/scenes/865ee277cdd04acba18daabbaace3d1f/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638857452419",
        text: "《海上丝绸之路2000年》",
      },
      {
        id: 3,
        background:
          "https://cloud.chan3d.com/scenes/5d2bf08096f53d57867fc7dc8e20995b/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638857452419",
        text: "湖湘妇运百年云展厅",
      },
      {
        id: 4,
        background:
          "https://cloud.chan3d.com/scenes/1qBoT3meedkko1VADOCltquptNu/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638860218258",
        text: "城市景点三维数字史馆",
      },
      {
        id: 5,
        background:
          "https://cloud.chan3d.com/scenes/022ce5e295ebe4557ebbb6a278e9ab9b/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638860780247",
        text: "延边老区革命馆",
      },
    ],
  },
  {
    id: 3,
    listBackground: [
      {
        id: 1,
        background:
          "https://cloud.chan3d.com/scenes/1wMvJhNuJ9O14Jfo2SQb02IbETj/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638860780248",
        text: "君子之风马少君个人画展",
      },
      {
        id: 2,
        background:
          "https://cloud.chan3d.com/scenes/1sHVsQ8DY5HFbHtySsvKizkisez/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861267545",
        text: "近思艺廊：赵伯辉春日花语油画个展",
      },
      {
        id: 3,
        background:
          "https://cloud.chan3d.com/scenes/1pCLyFDnyVy3uAUEibDJI03cmuo/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861550469",
        text: "寻梦艺源|贾越个人画展",
      },
      {
        id: 4,
        background:
          "https://cloud.chan3d.com/scenes/093ef26df96db0ecc1a37f1ce984ab93/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861753401",
        text: "浙江交通集团",
      },
      {
        id: 5,
        background:
          "https://cloud.chan3d.com/scenes/art20201117/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638864965487",
        text: "艺术展",
      },
    ],
  },
  {
    id: 4,
    listBackground: [
      {
        id: 1,
        background:
          "https://cloud.chan3d.com/scenes/022ce5e295ebe4557ebbb6a278e9ab9b/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638845177443",
        text: "延边老区革命馆",
      },
      {
        id: 2,
        background:
          "https://cloud.chan3d.com/scenes/1znZyZEXiWdVBujHev8YuLk43A5/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861188930",
        text: "纪录小康 云南征程",
      },
      {
        id: 3,
        background:
          "https://cloud.chan3d.com/scenes/1uL6P8Bh6VXBdyQpj9UeGN9Vika/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861267544",
        text: "肇庆市庆祝中国共产党成立100周年——“3个100”红色党史网上展馆",
      },
      {
        id: 4,
        background:
          "https://cloud.chan3d.com/scenes/d099cc072b3e6efd7c0f36a1754d0796/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638865671643",
        text: "建党100周年",
      },
      {
        id: 5,
        background:
          "https://cloud.chan3d.com/scenes/1qbOABXWEKFDjA66WJjOHKra6lG/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638865671644",
        text: "回顾党的长征历程，感怀党的百年之恩",
      },
    ],
  },
  {
    id: 5,
    listBackground: [
      {
        id: 1,
        background:
          "https://cloud.chan3d.com/scenes/1nvHgyNlo7x33T9HFEOryur8T0t/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638860780248",
        text: "森林狂想曲",
      },
      {
        id: 2,
        background:
          "https://cloud.chan3d.com/scenes/1rZTbmbeqYyKVNUu08BwRNTn5LR/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861267545",
        text: "时光浸润的艺术角落——上世纪广告插画展",
      },
      {
        id: 3,
        background:
          "https://cloud.chan3d.com/scenes/00d5ec08d692405eae1cd97060ee5110/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861550469",
        text: "”映彩“广彩文化品牌推广设计",
      },
      {
        id: 4,
        background:
          "https://cloud.chan3d.com/scenes/1purrnymO5ZpnafVUHjzl9cBei2/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861550469",
        text: "On The Way主题线上摄影展",
      },
      {
        id: 5,
        background:
          "https://cloud.chan3d.com/scenes/1p8qF1RgyPnZwI2HwxTmheohsGt/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638864965487",
        text: "艺术与灵感",
      },
    ],
  },
];

const activeMenu = ref<any>({ id: 1, text: "企业展厅" });
const activeContent = ref<any>({
  id: 1,
  listBackground: [
    {
      id: 1,
      background:
        "https://cloud.chan3d.com/scenes/d8b49d9bd2613f42cbbf6ba9a0b1c211/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638845674909",
      text: "海迈科技云展厅",
    },
    {
      id: 2,
      background:
        "https://cloud.chan3d.com/scenes/4c9c339049f081cb24d7b7a3e7a95ad9/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638846903991",
      text: "国家生态环境科技成果转化综合服务平台展厅",
    },
    {
      id: 3,
      background:
        "https://cloud.chan3d.com/scenes/6fd1acef201f7adfaf914a9fe6a0223f/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638849238841",
      text: "内蒙河山大观超低能耗展厅",
    },
    {
      id: 4,
      background:
        "https://cloud.chan3d.com/scenes/1n3UcojTSzQQcHOxWmZdvCk4Vr6/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638857452420",
      text: "中国煤科信息公司云展厅",
    },
    {
      id: 5,
      background:
        "https://cloud.chan3d.com/scenes/1n3UcojTSzQQcHOxWmZdvCk4Vr6/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638857452420",
      text: "创维展台",
    },
  ],
});

let timeout: any;

onMounted(() => {
  activeMenu.value = menuList[0];
  activeContent.value = listContent[0];
});

watch(activeMenu, () => {
  timeout = setTimeout(
    () =>
      changeActiveMenu(
        activeMenu.value.id === menuList.length ? 1 : activeMenu.value.id + 1
      ),
    3000
  );
});

const changeActiveMenu = (menuId: number) => {
  clearTimeout(timeout);
  const findMenu = menuList.find((menu) => menu && menu.id === menuId);

  if (findMenu) {
    activeMenu.value = findMenu;
    const findContent = listContent.find(
      (item) => item && item.id === findMenu.id
    );

    if (findContent) {
      activeContent.value = findContent;
    }
  }
};
</script>

<style lang="scss" scoped>
.section-case-slide {
  background: #f3f3f3;
  text-align: center;
  padding-bottom: 60px;

  .slide-case2 {
    max-width: 1280px;
    margin: 0 auto;

    .wrapper-top,
    .wrapper-bottom {
      .wrapper-item {
        height: 260px;
        position: relative;
        cursor: pointer;
        overflow: hidden;

        &:hover {
          span {
            opacity: 0.8;
          }

          img {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
          }
        }

        .bg {
          width: 100%;
          height: 100%;
          transition: 1.2s;
          object-fit: cover;
        }

        .bg1 {
          -webkit-animation: show-image-1 1.2s ease 1 forwards;
          animation: show-image-1 1.2s ease 1 forwards;
        }

        .bg2 {
          -webkit-animation: show-image-2 1.2s ease 1 forwards;
          animation: show-image-2 1.2s ease 1 forwards;
        }

        .bg3 {
          -webkit-animation: show-image-3 1.2s ease 1 forwards;
          animation: show-image-3 1.2s ease 1 forwards;
        }

        .bg4 {
          -webkit-animation: show-image-4 1.2s ease 1 forwards;
          animation: show-image-4 1.2s ease 1 forwards;
        }

        .bg5 {
          -webkit-animation: show-image-5 1.2s ease 1 forwards;
          animation: show-image-5 1.2s ease 1 forwards;
        }

        span {
          position: absolute;
          bottom: 5px;
          right: 5px;
          font-size: 16px;
          color: #ffffff;
          transition: 1.2s;
          background: linear-gradient(rgba(0, 0, 0, 0), #000000);
          opacity: 0;
          width: calc(100% - 10px);
          text-align: right;
        }
      }
    }
    .wrapper-top {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: 8px;
      column-gap: 8px;
    }
    .wrapper-bottom {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 8px;
    }
    .menu-list {
      height: 60px;
      line-height: 60px;
      margin-top: 16px;
      position: relative;

      .menu {
        display: flex;
        justify-content: center;

        .items {
          background-color: #ffffff;
          width: 130px;
          height: 44px;
          line-height: 44px;
          font-size: 16px;
          transition: 1s;
          margin: 0 10px;

          &:hover {
            background-color: #0f7bff;
            color: #ffffff;
          }
        }

        .active {
          background-color: #0f7bff;
          color: #ffffff;
        }
      }

      .more {
        position: absolute;
        bottom: 0;
        right: 0;
        transition: 0.5s;
        color: #999999;
        cursor: pointer;
      }
    }
  }
}
</style>
