<template>
  <div class="block">
    <el-date-picker popper-class="date_pop" v-model="value1" format="yyyy.MM.dd" type="daterange" range-separator="~" start-placeholder="开始日期" end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'myDate',
  props: { 'message': String },
  data () {
    return {
      value1: '',
      value2: ''
    }
  }
}
</script>
<style scoped>
.block {
  position: absolute;
  top: 120px;
  left: 120px;
}
.el-date-editor--daterange.el-input__inner {
  width: 204px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 0;
}
.el-date-editor >>> .el-range__icon {
  position: absolute;
  right: -0px;
  width: 32px;
  height: 32px;
  border: 1px solid #aaaaaa;
  box-sizing: border-box;
}
.el-date-editor >>> .el-range-separator {
  line-height: 24px;
}
.el-range-editor >>> .el-range-input {
  font-size: 13px;
  color: #222;
}
.el-range-editor >>> .el-range-input::placeholder {
  color: #222;
}
.el-date-editor >>> .el-range__close-icon.el-icon-circle-close::before {
  display: none;
}
.el-date-editor >>> .el-icon-date::before {
  content: "";
  background: url("../assets/images/ic-calendar.svg") no-repeat 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
}
</style>
<style>
.date_pop .el-date-table td.available:hover {
  color: #222;
  background-color: #ebe1ff;
}
.date_pop .el-date-table td.in-range div,
.date_pop .el-date-table td.in-range div:hover {
  background-color: #ebe1ff;
}
.date_pop .el-date-table td.start-date span,
.date_pop .el-date-table td.end-date span {
  background-color: #6a3ecf;
}

.date_pop .el-date-table td span {
  border-radius: 0;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 13px;
}
.date_pop .el-date-table td.start-date div {
  border-radius: 0;
}
.date_pop .el-date-table td div {
  padding: 0;
  height: 32px;
}
.date_pop .el-date-table td {
  height: 32px;
  padding: 0;
}
.date_pop .el-date-table td.today span {
  color: #6a3ecf;
  font-weight: 500;
}
.date_pop .el-date-table tr th:first-child,
.date_pop .el-date-table tr td:first-child {
  color: #ff0000;
}
.date_pop {
  width: 511px;
}
.date_pop .el-date-range-picker .el-picker-panel__body {
  min-width: 511px;
}
.date_pop .el-date-range-picker__header {
  height: 32px;
}
.date_pop.el-picker-panel {
  line-height: 32px;
}
.date_pop .el-picker-panel__icon-btn {
  margin-top: 11px;
}
.date_pop .el-date-range-picker__header div {
  font-size: 18px;
  color: #000;
}
.date_pop .el-icon-d-arrow-left:before {
  content: "";
  background: url("../assets/images/ic-paging-prev-page.svg") no-repeat 100%;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
}
.date_pop .el-icon-arrow-left:before {
  content: "";
  background: url("../assets/images/ic-paging-prev.svg") no-repeat 100%;
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
}
.date_pop .el-icon-d-arrow-right:before {
  content: "";
  background: url("../assets/images/ic-paging-next.svg") no-repeat 100%;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
}
.date_pop .el-icon-arrow-right:before {
  content: "";
  background: url("../assets/images/ic-paging-next-page.svg") no-repeat 100%;
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
}
.date_pop .el-picker-panel,
.date_pop .el-date-table th {
  color: #222;
}
.date_pop {
  border: 1px solid #aaa;
  border-radius: 0;
}
.date_pop .popper__arrow {
  display: none;
}
.date_pop.el-popper[x-placement^="bottom"] {
  margin-top: 4px;
}
.date_pop .el-date-range-picker__content.is-left {
  border-right: 1px solid #f4f4f4;
  box-sizing: border-box;
}
.date_pop .el-date-range-picker table {
  margin-top: 16px;
}
.date_pop .el-date-table th {
  padding: 0;
  border: 0;
}
.date_pop .el-date-table td.next-month,
.date_pop .el-date-table td.prev-month {
  color: #c0c4cc !important;
}
.date_pop .el-date-table {
  font-size: 13px;
}
</style>
