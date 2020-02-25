<template>
  <div class="myMenu">
    <el-menu class="el-menu-demo">
      <el-menu-item index="1">
        <img src="../assets/images/ic-logo-toast-contact.svg" alt="">
      </el-menu-item>
    </el-menu>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#f4f4f4" text-color="#333" active-text-color="#6a3ecf">
      <el-menu-item :index="index+1" v-for="(item,index) in navList" :key="index" :class="[item.dotTrue ? 'dot' : '']">
        {{item.text}}
      </el-menu-item>
    </el-menu>
    <el-menu class="el-menu-demo">
      <el-pagination layout="prev, pager, next" :total="20">
      </el-pagination>
      <el-submenu index="14">
        <template slot="title">我的工作台我的工作台</template>
        <el-menu-item index="14-1">选项1</el-menu-item>
        <el-menu-item index="14-2">选项2</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      navList: [
        {
          text: '엔에이치엔 엔터테인먼트',
          dotTrue: 1
        },
        {
          text: '크루쉐이더 퀘스트',
          dotTrue: 0
        }, {
          text: '티켓링크',
          dotTrue: 1
        },
        {
          text: 'HANGAME',
          dotTrue: 1
        },
        {
          text: 'BUGS',
          dotTrue: 0
        },
        {
          text: 'TOAST',
          dotTrue: 0
        },
        {
          text: 'PAYCO',
          dotTrue: true
        },
        {
          text: '프렌즈팝',
          dotTrue: 0
        }, {
          text: 'C-QUEST',
          dotTrue: 0
        },
        {
          text: 'HANGAME',
          dotTrue: 1
        },
        {
          text: '티켓링크',
          dotTrue: 0
        },
        {
          text: '크루쉐이더 퀘스트',
          dotTrue: 0
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scode>
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
.el-menu {
  display: inline-block;
  vertical-align: top;
  border: 0;
}
.el-menu:nth-child(2) {
  margin: 0 238px 0 280px;
  width: calc(100% - 518px);
  min-width: 1402px;
  overflow: hidden;
}
.el-menu:last-child {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3001;
  width: 238px;
}
.el-menu--horizontal > .el-menu-item {
  border-top: 2px solid transparent;
}
.el-menu--horizontal > .el-menu-item.dot {
  position: relative;
}
.el-menu--horizontal > .el-menu-item.dot::after {
  content: "";
  position: absolute;
  top: 21px;
  right: 15px;
  width: 4px;
  height: 4px;
  background-color: #e63464;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border: none;
  border-top: 2px solid #6a3ecf;
  color: #222222 !important;
  border-bottom-color: transparent !important;
  box-sizing: border-box;
  background-color: #ffffff !important;
}
.el-menu--horizontal > .el-menu-item.is-active:hover {
  background-color: #fff !important;
  color: #222222 !important;
}
.el-menu--horizontal > .el-menu-item:hover {
  background-color: #f4f4f4 !important;
  color: #6a3ecf !important;
}
.el-menu:first-child {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3001;
}
.el-menu:first-child > .el-menu-item {
  background-color: #6a3ecf !important;
  display: inline-block;
  height: 60px;
  line-height: 60px;
  padding: 0 25px !important;
}
.el-menu:first-child > .el-menu-item:hover {
  background-color: #521ec9 !important;
}
.el-badge__content.is-dot {
  width: 4px;
  height: 4px;
  right: -1px !important;
  top: 22px;
}
</style>
