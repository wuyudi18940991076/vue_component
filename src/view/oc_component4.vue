<template>
  <div class="myMenu">
    <div class="logo">
      <el-image :src="url"></el-image>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in navList" :key="index" :label="item.text" :name="item.name">
        <span slot="label">
          <el-badge :is-dot="item.dotTrue" class="item">{{ item.text }}</el-badge>
        </span>
      </el-tab-pane>
    </el-tabs>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="2">
        <template slot="title">
          <span><i class="myIcon"></i>상담원명</span>
        </template>
        <el-menu-item index="2-1">개인정보설정</el-menu-item>
        <el-menu-item index="2-2">로그아웃</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'header',
  props: { 'message': String },
  data () {
    return {
      activeName: '2',
      activeIndex2: '1',
      url: require('../assets/images/ic-logo-toast-contact.svg'),
      navList: [
        {
          text: '엔에이치엔 엔터테인먼트',
          name: '1',
          dotTrue: true
        },
        {
          text: '엔에이치엔 엔터테인먼트',
          name: '2',
          dotTrue: true
        },
        {
          text: '엔에이치엔 엔터테인먼트',
          name: '3',
          dotTrue: false
        },
        {
          text: '엔에이치엔 엔터테인먼트',
          name: '4',
          dotTrue: true
        },
        {
          text: '크루쉐이더 퀘스트',
          name: '5',
          dotTrue: false
        }, {
          text: '티켓링크',
          name: '6',
          dotTrue: true
        },
        {
          text: 'HANGAME',
          name: '7',
          dotTrue: true
        },
        {
          text: 'BUGS',
          name: '8',
          dotTrue: false
        },
        {
          text: 'TOAST',
          name: '9',
          dotTrue: false
        },
        {
          text: 'PAYCO',
          name: '10',
          dotTrue: true
        },
        {
          text: '프렌즈팝',
          name: '11',
          dotTrue: false
        }, {
          text: 'C-QUEST',
          name: '12',
          dotTrue: false
        },
        {
          text: 'HANGAME',
          name: '13',
          dotTrue: true
        },
        {
          text: '티켓링크',
          name: '14',
          dotTrue: false
        },
        {
          text: '크루쉐이더 퀘스트',
          name: '15',
          dotTrue: false
        },
        {
          text: '크루쉐이더 퀘스트',
          name: '16',
          dotTrue: false
        }
      ],
      cities: [{
        value: 'one',
        label: '개인정보설정'
      }, {
        value: 'two',
        label: '로그아웃'
      }],
      value: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
}
.myMenu {
  font-size: 0;
  width: 100%;
}
.el-menu.el-menu--horizontal {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3001;
  width: 150px;
  height: 60px;
  line-height: 60px;
  background-color: #f4f4f4 !important;
  border-left: 1px solid #e5e5e5;
}
.logo {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3001;
}
.logo > .el-image {
  background-color: #6a3ecf !important;
  display: inline-block;
  height: 60px;
  line-height: 60px;
  padding: 0 25px !important;
}
.logo > .el-image:hover {
  background-color: #521ec9 !important;
}
.el-tabs__header {
  margin: 0 238px 0 280px;
  background-color: #f4f4f4;
}

.el-tabs__active-bar {
  display: none;
}
.el-tabs__item {
  height: 60px;
  line-height: 60px;
  border-top: 2px solid transparent;
  border-right: 1px solid #e5e5e5;
}
.el-tabs__item:hover {
  color: #6a3ecf;
}
.el-tabs__item.is-active {
  background-color: #ffffff;
  border-top: 2px solid #6a3ecf;
  color: #222222;
}
.el-tabs__nav-wrap {
  overflow: visible;
}
.el-tabs__nav-wrap::after {
  height: 0px;
}
.el-tabs__item.dot_red {
  position: relative;
}
.el-tabs__item.dot_red::after {
  content: "";
  position: absolute;
  top: 21px;
  right: 15px;
  width: 4px;
  z-index: 333333;
  height: 4px;
  background-color: #e63464;
}
.el-tabs__nav-next,
.el-tabs__nav-prev {
  line-height: 60px;
  width: 44px;
  height: 60px;
  background-color: #f4f4f4;
  text-align: center;
  border-right: 1px solid #e5e5e5;
  box-sizing: border-box;
}
.el-tabs__nav-prev {
  border-left: 1px solid #e5e5e5;
  right: -44px;
  left: auto;
}
.el-tabs__nav-next {
  right: -88px;
}
.el-badge__content.is-fixed.is-dot {
  right: 0px;
  top: 22px;
  width: 4px;
  height: 4px;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 20px;
}
.el-tabs__nav-wrap.is-scrollable {
  padding: 0;
}
.el-tabs.el-tabs--top {
  height: 60px;
}
.el-submenu__title {
  padding: 0 15px 0 18px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  background-color: #f4f4f4 !important;
  color: #333 !important;
}
.myIcon {
  background: url("../assets/images/ic-partner-user-black.svg") no-repeat 100%;
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 6px;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  margin-left: 6px;
}
.el-menu--popup-bottom-start {
  margin-top: 0;
}
.el-menu--popup {
  min-width: 108px;
  background-color: #fff !important;
  padding: 10px 0;
}
.el-menu--popup .el-menu-item {
  background-color: #fff !important;
  color: #222 !important;
}
.el-menu--horizontal .el-menu .el-menu-item {
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 0;
}
.el-menu--horizontal .el-menu-item:hover {
  color: #6a3ecf !important;
}
.el-icon-arrow-down {
  position: relative;
}
.el-icon-arrow-down:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-bottom.svg") no-repeat 100%;
}
/* .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow{
  transform: rotateZ(180deg);
} */
</style>
