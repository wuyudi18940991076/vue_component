<template>
  <div class="myMenu">
    <div class="my_menu">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse-transition="false" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item index="1">
          <i class="logoS"></i>
          <span class="logo_img" slot="title"><img :src="url" alt=""></span>
        </el-menu-item>
        <el-menu-item index="2" popper-class=''>
          <span class="name_h2" slot="title">CS관리시스템</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="my-icon-notice"></i>
          <span slot="title">공지사항</span>
        </el-menu-item>
        <el-submenu :index="index+1+''" v-for="(item,index) in menuList" :key="index">
          <template slot="title">
            <i :class="item.itemClass"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <el-menu-item-group class="menu_pop">
            <el-tabs :tab-position="tabPosition" style="height: 200px;">
              <el-tab-pane v-for="(list,index) in item.myList" :key="index">
                <span slot="label"><i :class="list.listClass"></i>{{list.list1}}</span>
              </el-tab-pane>
            </el-tabs>
          </el-menu-item-group>
        </el-submenu>
        <el-radio-group>
          <div class="have" v-if="isCollapse" @click="trun"></div>
          <div class="none" v-else @click="trun"></div>
        </el-radio-group>
      </el-menu>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
<script>
export default {
  name: 'myMenu',
  props: { 'message': String },
  data () {
    return {
      label: true,
      noUse: false,
      url: require('../assets/images/ic-logo-toast-contact.svg'),
      isCollapse: true,
      tabPosition: 'right',
      menuList: [
        {
          title: '채팅',
          itemClass: 'my-icon-faq',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        },
        {
          title: '티켓 관리',
          itemClass: 'my-icon-ticket',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        },
        {
          title: '헬프센터',
          itemClass: 'my-icon-help',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        },
        {
          title: '통계',
          itemClass: 'my-icon-report',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        },
        {
          title: '서비스 설정',
          itemClass: 'my-icon-setting-se',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        },
        {
          title: '전체 설정',
          itemClass: 'my-icon-setting',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        }
      ],
      contract: true,
      expand: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    trun () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style type="text/css">
html,
body {
  width: 100%;
}
.myMenu .el-menu--collapse {
  position: relative;
}
.myMenu .el-menu-vertical-demo:not(.el-menu--collapse) > .el-menu-item:first-child {
  background-color: #6a3ecf;
  text-align: center;
}
.myMenu .el-menu-vertical-demo:not(.el-menu--collapse)
  > .el-menu-item:first-child:hover {
  background-color: #521ec9;
}
.myMenu .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.myMenu .logoS {
  margin: 0;
  vertical-align: middle;
  width: 24px;
  text-align: center;
  position: relative;
}
.myMenu .logoS::before {
  background: url("../assets/images/ic-logo-toast-contact-s.svg") no-repeat
    center;
  background-color: #6a3ecf;
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  width: 60px;
  height: 60px;
  background-size: 28px;
}
.myMenu .logoS:hover::before {
  background: url("../assets/images/ic-logo-toast-contact-s.svg") no-repeat
    center;
  background-color: #521ec9;
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  width: 60px;
  height: 60px;
  background-size: 28px;
}
.myMenu .el-menu--collapse {
  width: 60px;
}
.myMenu .el-menu-item:first-child,
.myMenu .el-menu-item:first-child .el-tooltip {
  padding: 0px 0px !important;
  height: 60px !important;
  line-height: 60px !important;
}
.myMenu .el-menu-item:nth-child(2),
.myMenu .el-menu-item:nth-child(2) .el-tooltip {
  display: none;
}
.myMenu .el-menu-vertical-demo:not(.el-menu--collapse) .el-menu-item:nth-child(2) {
  display: inline-block;
  padding-left: 30px !important;
  margin: 16px 0 6px 0;
  height: 40px;
  line-height: 40px;
}
.myMenu .el-menu-vertical-demo:not(.el-menu--collapse)
  .el-menu-item:nth-child(2):hover {
  background-color: #fff;
}
.myMenu .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 280px;
}
.myMenu .el-menu-vertical-demo:not(.el-menu--collapse) .el-menu-item i::before {
  content: "";
  display: none;
}
.myMenu .el-menu-item [class^="el-icon-"] {
  width: 0;
}
.myMenu .el-menu-item {
  padding: 0 30px;
  height: 42px;
  line-height: 42px;
}
.myMenu .el-menu-vertical-demo:not(.el-menu--collapse) .el-menu-item {
  height: 42px;
  line-height: 42px;
  font-size: 13px;
  color: #222;
}
.myMenu .name_h2 {
  display: block;
  font-size: 16px !important;
  font-weight: 500;
  color: #222222;
}
.myMenu .el-submenu [class^="my-icon-"] {
  text-align: center;
  position: relative;
  line-height: 42px;
  display: none;
  width: 0;
}
.myMenu .el-menu-item:nth-child(3) .el-tooltip .my-icon-notice::before {
  position: absolute;
  content: "";
  background: url("../assets/images/icon-ic-contact-notice.svg") no-repeat
    center 100%;
  width: 20px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
}
.myMenu .el-submenu [class^="my-icon-"]::after {
  position: absolute;
  content: "";
  background: url("../assets/images/ic-lnb-more.svg") no-repeat center 100%;
  width: 5px;
  bottom: 3px;
  right: -26px;
  height: 5px;
}
.myMenu .el-menu-item:nth-child(3) {
  margin-top: 10px;
}
.myMenu .el-submenu [class^="my-icon-"]::before {
  position: absolute;
  content: "";
  background: url("../assets/images/icon-ic-contact-faq.svg") no-repeat center
    100%;
  width: 20px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
}
.myMenu .el-submenu .my-icon-ticket::before {
  background: url("../assets/images/icon-ic-contact-ticket.svg") no-repeat
    center 100%;
}
.myMenu .el-submenu .my-icon-help::before {
  background: url("../assets/images/icon-ic-contact-help.svg") no-repeat center
    100%;
}
.myMenu .el-submenu .my-icon-report::before {
  background: url("../assets/images/icon-ic-contact-report.svg") no-repeat
    center 100%;
}
.myMenu .el-submenu .my-icon-setting-se::before {
  background: url("../assets/images/icon-ic-contact-setting-service.svg")
    no-repeat center 100%;
}
.myMenu .el-submenu .my-icon-setting::before {
  background: url("../assets/images/icon-ic-contact-setting.svg") no-repeat
    center 100%;
}
.myMenu .el-submenu__title {
  height: 42px;
  line-height: 42px;
  padding: 0 55px 0 30px !important;
}
.myMenu .el-menu--collapse .el-submenu [class^="my-icon-"] {
  display: inline-block;
}
.myMenu .el-menu--collapse .el-submenu .el-submenu__title {
  padding: 0px 20px !important;
}
.myMenu .el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100vh;
}
.myMenu .el-menu--collapse {
  height: 100vh;
}
.myMenu .el-radio-group {
  position: absolute;
  top: 500px;
  right: -22px;
}
.myMenu .el-submenu__title:hover {
  background-color: #ebe1ff;
}
.myMenu .el-submenu.is-opened i,
.myMenu .el-submenu__title:hover i {
  opacity: 1;
}
.myMenu .el-menu-item:focus,
.myMenu .el-menu-item:hover {
  background-color: #ebe1ff;
}
.myMenu .el-submenu__title:hover [class^="my-icon-"]::after {
  position: absolute;
  content: "";
  background: url("../assets/images/ic-lnb-more-purple.svg") no-repeat center
    100%;
  width: 5px;
  bottom: 3px;
  right: -26px;
  height: 5px;
}
.myMenu .el-submenu__title .el-submenu__icon-arrow {
  opacity: 0.3;
}
.myMenu .el-submenu__title i {
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-bottom.svg") no-repeat center
    100%;
}
.myMenu .el-submenu__title i::before {
  content: "";
}
.myMenu .el-menu--collapse
  > .el-submenu
  > .el-submenu__title
  .el-submenu__icon-arrow.el-icon-arrow-right {
  display: none;
}
.myMenu .el-menu-vertical-demo:not(.el-menu--collapse) .el-menu-item:nth-child(3) {
  padding: 0 30px !important;
  margin: 0;
}
.myMenu .el-menu-vertical-demo:not(.el-menu--collapse)
  .el-menu-item:nth-child(3):hover {
  background-color: #ebe1ff;
}
/* .el-tabs__content {
  display: none;
} */
.el-tabs--right .el-tabs__header.is-right {
  float: left;
  margin-left: 35px;
}
.menu_pop .el-tabs__item {
  padding: 0 15px;
}
.myMenu .el-radio-button {
  width: 20px;
}
.myMenu .el-radio-button__inner {
  padding: 5px;
}
.el-tabs--right .el-tabs__nav-wrap.is-right::after {
  top: 15px;
  height: 65%;
}
.menu_pop .el-tabs__item {
  padding-left: 85px;
}
.menu_pop .el-tabs__item:hover,
.menu_pop .el-tabs__item.is-active {
  background-color: #ebe1ff;
  color: #222;
}
.el-tabs--right .el-tabs__header.is-right {
  margin: 0;
  width: 100%;
}
.el-tabs--right .el-tabs__nav-wrap.is-right {
  margin: 0;
}
.el-tabs--right .el-tabs__active-bar.is-right {
  left: 35px;
}
.menu_pop .el-tabs__item [class^="you-icon-"] {
  position: absolute;
  display: inline-block;
  background: url("../assets/images/icon-ic-contact-setting-service.svg")
    no-repeat center 100%;
  width: 20px;
  top: 10px;
  left: 50px;
  height: 20px;
}
.menu_pop .el-tabs__item .you-icon-faq {
  background: url("../assets/images/icon-ic-contact-faq.svg") no-repeat center
    100%;
}
.menu_pop .el-tabs__item .you-icon-ticket {
  background: url("../assets/images/icon-ic-contact-ticket.svg") no-repeat
    center 100%;
}
.menu_pop .el-tabs__item .you-icon-helpcenter {
  background: url("../assets/images/icon-ic-contact-helpcenter.svg") no-repeat
    center 100%;
}
.el-tabs__active-bar {
  background-color: #222;
}
.el-tabs--right .el-tabs__active-bar.is-right {
  top: 11px;
  height: 18px !important;
}

.el-tooltip__popper {
  display: none !important;
}
.myMenu .el-radio-group .have,
.myMenu .el-radio-group .none {
  position: relative;
  border-radius: 50%;
  background: #f4f4f4;
  width: 46px;
  height: 46px;
  text-align: center;
}
.myMenu .el-radio-group .have::before,
.myMenu .el-radio-group .none::before {
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  content: "";
  background: url("../assets/images/ic-float-resize-left.svg") no-repeat center
    100%;
  overflow: hidden;
  position: absolute;
  width: 20px;
  height: 20px;
}
.myMenu .el-radio-group .none::before {
  background: url("../assets/images/ic-float-resize-right.svg") no-repeat center
    100%;
}
</style>
<style>
.el-tabs__nav.is-right:after {
  position: absolute;
  width: 2px;
  height: 88%;
  left: 35px;
  top: 10px;
  background: rgba(0, 0, 0, 0.05);
  content: "";
  z-index: 1;
}
</style>
