<template>
  <div class="common">
    <div class="my_input">
      <div class="commom_input">
        普通输入框
        <el-input class="myInput" v-model="input1" placeholder="0"></el-input>
      </div>
      <div class="disable_input">
        禁用输入框
        <el-input class="myInput" disabled="" v-model="input2" placeholder=""></el-input>
      </div>
      <div class="tips_input">
        提示输入框
        <el-input class="myInput tips_border" v-model="input3" placeholder="0"></el-input>
      </div>
      <div class="have_icon">
        带icon的输入框默认样式
        <el-input class="myInput icon_input" placeholder="日期" v-model="input4">
          <i slot="suffix" class="date_icon"></i>
        </el-input>
      </div>
      <div class="have_icon">
        带icon的输入框禁用样式
        <el-input class="myInput icon_input" disabled="" placeholder="日期" v-model="input4">
          <i slot="suffix" class="date_icon"></i>
        </el-input>
      </div>
      <div class="my_select">
        <div class="common_select">
          共通下拉菜单
          <el-select popper-class="select_pop" class="mySelect" v-model="value1" placeholder="请选择">
            <el-option v-for="(item, index) in cities" :key="index" :label="item.label" :value="index">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="common_select">
          禁用状态下拉菜单
          <el-select disabled="" popper-class="select_pop" class="mySelect" v-model="value2" placeholder="请选择">
            <el-option v-for="(item, index) in cities" :key="index" :label="item.label" :value="index">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="my_cascader">
      通用联选择器
      <el-cascader popper-class="select_pop" class="mySelect" v-model="value6" :options="options" :props="{ expandTrigger: 'hover' }" @change="handleChange"></el-cascader>
    </div>
    <div class="common_button">
      <p>白色小按钮</p>
      <el-button type="primary" class="button_s write_b" plain>이동</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_s write_b" disabled="" plain>禁用</el-button>
      <p>紫色小按钮</p>
      <el-button type="primary" class="button_s purple_b" plain>이동</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_s purple_b" disabled="" plain>禁用</el-button>
      <p>红色小按钮</p>
      <el-button type="primary" class="button_s red_b" plain>이동</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_s red_b" disabled="" plain>禁用</el-button>
      <p>灰色小按钮</p>
      <el-button type="primary" class="button_s gray_b" plain>이동</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_s gray_b" disabled="" plain>禁用</el-button>
      <p>白色M按钮</p>
      <el-button type="primary" class="button_m write_b">搜索</el-button>
      <p>带icon</p>
      <el-button type="primary" class="button_m write_b have_icon" icon="my_icon_search">搜索</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_m write_b" disabled="">搜索</el-button>
      <p>紫色M按钮</p>
      <el-button type="primary" class="button_m purple_b">搜索</el-button>
      <p>带icon</p>
      <el-button type="primary" class="button_m purple_b have_icon" icon="my_icon_add">搜索</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_m purple_b" disabled="">搜索</el-button>
      <p>红色M按钮</p>
      <el-button type="primary" class="button_m red_b">搜索</el-button>
      <p>带icon</p>
      <el-button type="primary" class="button_m red_b have_icon" icon="my_icon_add">搜索</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_m red_b" disabled="">搜索</el-button>
      <p>灰色M按钮</p>
      <el-button type="primary" class="button_m gray_b">搜索</el-button>
      <p>带icon</p>
      <el-button type="primary" class="button_m gray_b have_icon" icon="my_icon_add">搜索</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_m gray_b" disabled="">搜索</el-button>
      <p>紫色L按钮</p>
      <el-button type="primary" class="button_l purple_b">0</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_l purple_b" disabled="">0</el-button>
      <p>灰色L按钮</p>
      <el-button type="primary" class="button_l gray_b">0</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_l gray_b" disabled="">0</el-button>

      <p>紫色XL按钮</p>
      <el-button type="primary" class="button_xl purple_b">0</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_xl purple_b" disabled="">0</el-button>
      <p>灰色XL按钮</p>
      <el-button type="primary" class="button_xl gray_b">0</el-button>
      <p>禁用</p>
      <el-button type="primary" class="button_xl gray_b" disabled="">0</el-button>
    </div>
    <div class="common_tab">
      <el-radio-group class="type_one" v-model="radio1">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
      </el-radio-group>
      <el-radio-group class="type_two" v-model="radio2">
        <el-radio-button label="0"></el-radio-button>
        <el-radio-button label="1"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="common_switch">
      <p>正常状态</p>
      <el-switch v-model="value66" active-color="#6a3ecf" inactive-color="#ddd">
      </el-switch>
      <p>禁用状态</p>
      <el-switch v-model="value67" active-color="#6a3ecf" disabled="" inactive-color="#ddd">
      </el-switch>
    </div>
    <div class="common_check">
      <el-radio class="my_radio" v-model="radio_o" label="1"></el-radio>
      <el-radio class="my_radio" v-model="radio_o" label="2"></el-radio>
      <el-radio disabled v-model="radio_x" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="radio_x" label="选中且禁用">备选项</el-radio>
      <el-checkbox class="my_checked" v-model="checked">备选项</el-checkbox>
      <el-checkbox class="my_checked" v-model="checked1" disabled>备选项1</el-checkbox>
      <el-checkbox class="my_checked" v-model="checked2" disabled>备选项</el-checkbox>
    </div>
    <div class="common_chat">
      <div class="first_chat my_chat">对方说的第一条话</div>
      <br><br>
      <div class="my_chat">对方之后说的话</div>
      <br><br>
      <div class="minefirst_chat mine my_chat">本人说的第一句话</div>
      <br><br>
      <div class="my_chat mine">本人之后说的话</div>
    </div>
  </div>
</template>
<style>
.common_chat {
  position: absolute;
  top: 600px;
  left: 1000px;
}
.my_chat {
  height: 38px;
  line-height: 36px;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  padding: 0px 15px;
  display: inline-block;
  color: #222;
  position: relative;
}
.mine {
  background-color: #e1d5fa;
  border: 0;
}
.first_chat,
.minefirst_chat {
  position: relative;
}
.first_chat::before {
  content: "";
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #e2e2e2;
  position: absolute;
  transform: rotate(44deg);
  left: -11px;
  top: 2px;
}
.first_chat::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #fff;
  position: absolute;
  transform: rotate(45deg);
  left: -8.5px;
  top: 3px;
}
.minefirst_chat::before {
  content: "";
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #e1d5fa;
  position: absolute;
  transform: rotate(-45deg);
  right: -10px;
  top: 2px;
}
</style>
<style>
input:focus {
  outline: none;
}
.common_tab {
  position: absolute;
  top: 220px;
  right: 290px;
}
.type_one .el-radio-button__inner {
  border: 1px solid #eee;
  color: #222;
  padding: 8px 25px;
  font-size: 13px;
  box-sizing: border-box;
  border-radius: 2px;
}
.type_one .el-radio-button__inner:hover {
  border: 1px solid transparent;
  background-color: #ebe1ff;
  color: #222;
  box-sizing: border-box;
}
.type_one .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background-color: #6a3ecf;
  color: #fff;
  border: 1px solid transparent;
}
.type_two .el-radio-button__inner {
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  color: #333;
  padding: 10px 6px;
  font-size: 13px;
  box-sizing: border-box;
  border-radius: 2px 2px 2px 2px;
  height: 32px;
  line-height: 10px;
  width: 28px;
}
.type_two .el-radio-button__inner:hover {
  border: 1px solid #aaa;
  background-color: #f9f9f9;
  color: #333;
  box-sizing: border-box;
}
.type_two .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background-color: #fff;
  color: #333;
  border: 2px solid #6a3ecf;
}
.el-switch__core {
  width: 24px !important;
  height: 14px;
  line-height: 14px;
}
.el-switch.is-checked .el-switch__core::after {
  margin-left: -12px;
}
.el-switch__core:after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 100%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  width: 12px;
  height: 12px;
  background-color: #fff;
}
.my_radio .el-radio__inner:hover {
  border-color: #aaa;
}
.my_radio .el-radio__input.is-checked .el-radio__inner {
  border-color: #c5c5c5;
  background-color: #fff;
}
.my_radio .el-radio__inner::after {
  background-color: #6a3ecf;
  width: 8px;
  height: 8px;
}
.el-checkbox__inner {
  border: 1px solid #c3c3c3;
}
.el-checkbox__inner::after {
  border: 2px solid #fff;
  border-left: 0;
  border-top: 0;
}
.el-checkbox__inner:hover {
  border-color: #999;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #521ec9;
  border-color: #521ec9;
}
</style>
<style>
.common_button {
  position: absolute;
  top: 220px;
  left: 666px;
  width: 100px;
}
.common_button p {
  line-height: 30px;
  height: 30px;
  font-size: 16px;
  text-align: center;
}
.button_s.el-button {
  padding: 0px 8px;
  height: 24px;
  line-height: 24px;
  width: 100%;
  font-size: 13px;
  text-align: left;
  border-radius: 2px;
}
.el-button.have_icon {
  padding: 6px 12px 6px 6px !important;
}
.write_b.el-button--primary {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  color: #333;
}
.write_b.el-button--primary:active,
.write_b.el-button--primary:focus,
.write_b.el-button--primary:hover,
.write_b.el-button--primary.is-disabled,
.write_b.el-button--primary.is-disabled:active,
.write_b.el-button--primary.is-disabled:focus,
.write_b.el-button--primary.is-disabled:hover {
  color: #333;
  background: #f9f9f9;
  border: 1px solid #aaa;
}
.write_b.el-button--primary.is-disabled,
.write_b.el-button--primary.is-disabled:active,
.write_b.el-button--primary.is-disabled:focus,
.write_b.el-button--primary.is-disabled:hover {
  opacity: 0.2;
}
.purple_b.el-button--primary {
  background-color: #6a3ecf;
  border: 0px solid #ddd;
  color: #fff;
}
.purple_b.el-button--primary:active,
.purple_b.el-button--primary:focus,
.purple_b.el-button--primary:hover,
.purple_b.el-button--primary.is-disabled,
.purple_b.el-button--primary.is-disabled:active,
.purple_b.el-button--primary.is-disabled:focus,
.purple_b.el-button--primary.is-disabled:hover {
  color: #fff;
  background: #521ec9;
  border: 0px solid #aaa;
}
.purple_b.el-button--primary.is-disabled,
.purple_b.el-button--primary.is-disabled:active,
.purple_b.el-button--primary.is-disabled:focus,
.purple_b.el-button--primary.is-disabled:hover {
  opacity: 0.2;
}
.red_b.el-button--primary {
  background-color: #ff0000;
  border: 0px solid #ddd;
  color: #fff;
}
.red_b.el-button--primary:active,
.red_b.el-button--primary:focus,
.red_b.el-button--primary:hover,
.red_b.el-button--primary.is-disabled,
.red_b.el-button--primary.is-disabled:active,
.red_b.el-button--primary.is-disabled:focus,
.red_b.el-button--primary.is-disabled:hover {
  color: #fff;
  background: #e50b0b;
  border: 0px solid #aaa;
}
.red_b.el-button--primary.is-disabled,
.red_b.el-button--primary.is-disabled:active,
.red_b.el-button--primary.is-disabled:focus,
.red_b.el-button--primary.is-disabled:hover {
  opacity: 0.2;
}
.gray_b.el-button--primary {
  background-color: #aaa;
  border: 0px solid #ddd;
  color: #fff;
}
.gray_b.el-button--primary:active,
.gray_b.el-button--primary:focus,
.gray_b.el-button--primary:hover,
.gray_b.el-button--primary.is-disabled,
.gray_b.el-button--primary.is-disabled:active,
.gray_b.el-button--primary.is-disabled:focus,
.gray_b.el-button--primary.is-disabled:hover {
  color: #fff;
  background: #999;
  border: 0px solid #aaa;
}
.gray_b.el-button--primary.is-disabled,
.gray_b.el-button--primary.is-disabled:active,
.gray_b.el-button--primary.is-disabled:focus,
.gray_b.el-button--primary.is-disabled:hover {
  opacity: 0.2;
}
.button_m.el-button {
  padding: 6px 12px;
  height: 32px;
  line-height: 21px;
  width: 100%;
  font-size: 13px;
  text-align: left;
  border-radius: 2px;
}
.write_b.el-button--primary .my_icon_search {
  display: inline-block;
  vertical-align: top;
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-search.svg") no-repeat 100%;
}
.el-button--primary .my_icon_add {
  display: inline-block;
  vertical-align: top;
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-make-white.svg") no-repeat 100%;
}
.button_l.el-button {
  padding: 3px 30px;
  height: 40px;
  line-height: 38px;
  width: 100%;
  font-size: 15px;
  text-align: left;
  border-radius: 2px;
}
.button_xl.el-button {
  height: 44px;
  width: 100%;
  font-size: 15px;
  text-align: center;
  border-radius: 2px;
}
</style>
<style>
.my_cascader {
  position: absolute;
  top: 120px;
  left: 600px;
}
.el-cascader {
  line-height: 32px;
}
.el-icon-arrow-down:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 6px;
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-bottom.svg") no-repeat 100%;
}
.el-cascader .el-input .el-icon-arrow-down.is-reverse:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 6px;
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-top.svg") no-repeat 100%;
}
.el-cascader .el-input .el-icon-arrow-down.is-reverse {
  transform: inherit;
}
.el-cascader .el-input.is-focus .el-input__inner {
  border-color: #aaa;
}
.select_pop .el-icon-arrow-right:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-small-right.svg") no-repeat
    100%;
  opacity: 0.3;
}
.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover {
  opacity: 1;
}
.el-cascader-node.in-active-path:focus .el-icon-arrow-right:before {
  opacity: 1;
}
.el-cascader-node.in-active-path:hover .el-icon-arrow-right:before {
  opacity: 1;
}
.el-cascader-menu__list {
  padding: 0;
}
.el-cascader-node {
  line-height: 32px;
  height: 32px;
  padding: 0 30px 0px 12px;
}
.el-cascader-node.in-active-path,
.el-cascader-node.is-active,
.el-cascader-node.is-selectable.in-checked-path {
  color: #333;
  background-color: #ebe1ff;
  font-weight: 400;
}
.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover {
  color: #333;
  background-color: #ebe1ff;
}
.el-cascader-node__prefix {
  left: auto;
  right: 20px;
}
.el-cascader-node.in-active-path.in-checked-path:before,
.el-icon-check:before {
  content: "";
  background: url("../assets/images/ic-check-purple.svg") no-repeat 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
.el-cascader-menu {
  min-width: 210px;
}
</style>
<script>
export default {
  name: 'myInput',
  props: { 'message': String },
  data () {
    return {
      value66: true,
      value67: true,
      checked: true,
      checked1: false,
      checked2: true,
      radio_x: '选中且禁用',
      radio1: 'lala',
      radio2: '上海',
      radio_o: '1',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      cities: [{
        label: '北京'
      }, {
        label: '上海'
      }, {
        label: '南京'
      }, {
        label: '成都'
      }, {
        label: '深圳'
      }, {
        label: '广州'
      }],
      value1: '',
      value2: '',
      value6: [],
      options: [{
        value: 'zhinan',
        label: '카테고리1-1',
        children: [{
          value: 'shejiyuanze',
          label: '카테고리2-1',
          children: [{
            value: 'yizhi',
            label: '카테고리2-1-1'
          }, {
            value: 'fankui',
            label: '카테고리2-1-2'
          }, {
            value: 'xiaolv',
            label: '카테고리2-1-3'
          }]
        }, {
          value: 'daohang',
          label: '카테고리2-1',
          children: [{
            value: 'cexiangdaohang',
            label: '카테고리2-1-1'
          }, {
            value: 'dingbudaohang',
            label: '카테고리2-1-2'
          }]
        }]
      }, {
        value: 'zujian',
        label: '카테고리2-1-2',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: '카테고리2-1-2'
          }, {
            value: 'color',
            label: '카테고리2-1-2'
          }, {
            value: 'typography',
            label: '카테고리2-1-2'
          }, {
            value: 'icon',
            label: '카테고리2-1-2'
          }, {
            value: 'button',
            label: '카테고리2-1-2'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: '카테고리2-1-2'
          }, {
            value: 'checkbox',
            label: '카테고리2-1-2'
          }, {
            value: 'input',
            label: '카테고리2-1-2'
          }, {
            value: 'input-number',
            label: '카테고리2-1-2'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '카테고리3-1',
        children: [{
          value: 'axure',
          label: '카테고리3-1-1'
        }, {
          value: 'sketch',
          label: '카테고리3-1-2'
        }, {
          value: 'jiaohu',
          label: '카테고리3-1-3'
        }]
      }]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
<style>
.my_input {
  width: 100px;
  position: absolute;
  top: 200px;
  left: 120px;
}
.my_input div {
  margin: 5px 0;
}
.myInput {
  font-size: 13px;
}
.myInput .el-input__inner {
  height: 32px;
  padding: 6px 12px;
  color: #222;
  line-height: 32px;
  border-radius: 0;
  border: 1px solid #ddd;
}
.myInput .el-input__inner:hover {
  border: 1px solid #aaa;
}
.myInput .el-input__inner::placeholder {
  color: #222;
  opacity: 0.38;
}
.myInput.el-input.is-disabled .el-input__inner {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}
.tips_border .el-input__inner,
.tips_border .el-input__inner:hover {
  border: 1px solid #fa2828;
}
.icon_input .el-input__inner {
  padding: 6px 14px 6px 12px;
  width: calc(100% - 32px);
}
.icon_input .el-input__suffix {
  right: 0px;
  height: 30px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  border-left: 0;
}
.icon_input .el-input__suffix-inner {
  display: inline-block;
  height: 30px;
}
.icon_input .date_icon {
  width: 31px;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
}
.icon_input .date_icon::before {
  content: "";
  background: url("../assets/images/ic-calendar.svg") no-repeat 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.myInput.icon_input.is-disabled .date_icon::before {
  opacity: 0.2;
}
.mySelect .el-input {
  font-size: 13px;
}
.mySelect .el-input__inner {
  height: 32px;
  line-height: 32px;
  color: #333;
  border-radius: 0;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  padding: 6px 30px 6px 12px;
}
.mySelect .el-input__suffix {
  right: 0;
}
.mySelect .el-icon-arrow-up:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-top.svg") no-repeat 100%;
}
.mySelect .is-focus .el-input__inner {
  border: 1px solid #aaa;
}
.mySelect .el-input__inner:hover {
  border: 1px solid #aaa;
}

.mySelect .is-disabled .el-icon-arrow-up:before {
  opacity: 0.2;
}
</style>
<style>
.select_pop {
  border: 1px solid #aaa;
  border-radius: 0;
}
.select_pop .popper__arrow {
  display: none;
}
.select_pop .el-select-dropdown__list {
  padding: 0;
}
.select_pop .el-select-dropdown__item.hover,
.select_pop .el-select-dropdown__item:hover {
  background-color: #ebe1ff;
}
.el-select-dropdown__item {
  padding: 6px 29px 6px 11px;
  line-height: 20px;
}
.el-select-dropdown__item.selected {
  position: relative;
  color: #333;
  font-weight: 400;
}
.el-select-dropdown__item.selected::after {
  content: "";
  background: url("../assets/images/ic-check-purple.svg") no-repeat 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
</style>
