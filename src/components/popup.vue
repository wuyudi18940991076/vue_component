<template>
  <div class="popup">
    <div>
      <p class="my_description">下面是第一种pop类型:有两个button</p>
      <el-button type="text" @click="open">第一种pop类型:有两个button</el-button>
    </div>
    <div>
      <p class="my_description">下面是第二种pop类型:有一个button文字增加</p>
      <el-button type="text" @click="open1">第二种pop类型:有一个button</el-button>
    </div>
    <div>
      <p class="my_description">下面是第三种pop类型:里面有选择器</p>
      <el-button type="text" @click="open2">里面有一个选择器</el-button>
      <el-button type="text" @click="open3">里面有两个选择器</el-button>
      <el-button type="text" @click="open4">里面有一段文字一个选择器</el-button>
    </div>
    <div>
      <p class="my_description">下面是带评价的pop</p>
      <el-button type="text" @click="open5">里面有一段文字一个选择器</el-button>
    </div>
    <div>
      <p class="my_description">下面是带树形控件的popup</p>
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
      <el-dialog custom-class="pop_type2" title="접수유형 조회" :visible.sync="dialogVisible" width="400px" :before-close="handleClose">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search">검색</el-button>
        </el-input>
        <el-button type="primary" class="button_s write_b" plain>모두 펼치기</el-button>
        <el-button type="primary" class="button_s write_b" plain>모두 접기</el-button>
        <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
        </el-tree>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">취소</el-button>
          <el-button type="primary" @click="dialogVisible = false">확인</el-button>
        </span>
      </el-dialog>
    </div>
    <div>
      <p class="my_description">下面是带表格的popup</p>
      <el-button type="text" @click="dialogVisible1 = true">点击打开带表格的popup</el-button>
      <el-dialog custom-class="pop_type2" title="개인정보" :visible.sync="dialogVisible1" width="590px" :before-close="handleClose">
        <dl class="my_information">
          <dt>계정</dt>
          <dd>
            <el-input placeholder="kimenter" disabled v-model="input4" class="input-with-select"></el-input>
          </dd>
          <dt>이름</dt>
          <dd>
            <el-input placeholder="김엔터" v-model="input5" class="input-with-select"></el-input>
          </dd>
          <dt>닉네임</dt>
          <dd>
            <el-input placeholder="엔터" v-model="input6" class="input-with-select"></el-input>
          </dd>
          <dt>전화번호</dt>
          <dd>
            <el-input placeholder="010-1234-5678" v-model="input7" class="input-with-select"></el-input>
          </dd>
          <dt>이메일</dt>
          <dd>
            <el-input placeholder="kimenter@nhnent.com" v-model="input8" class="input-with-select"></el-input>
          </dd>
          <dt>이메일</dt>
          <dd>
            <el-select v-model="value" placeholder="한국어">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </dd>
          <dt>티켓 할당</dt>
          <dd>
            <el-radio-group class="type_choose" v-model="radio2">
              <el-radio-button label="활성화"></el-radio-button>
              <el-radio-button label="비활성화"></el-radio-button>
            </el-radio-group>
          </dd>
        </dl>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible1 = false">확인</el-button>
        </span>
      </el-dialog>
    </div>
    <div>
      <p class="my_description">下面是带表格的popup第二种</p>
      <el-button type="text" @click="dialogVisible2 = true">点击打开带表格的popup</el-button>
      <el-dialog custom-class="pop_type2" title="서비스 추가" :visible.sync="dialogVisible2" width="590px" :before-close="handleClose">
        <dl class="my_information">
          <dt>서비스 명</dt>
          <dd>
            <el-input placeholder="서비스명을 입력하세요." disabled v-model="input4" class="input-with-select"></el-input>
          </dd>
          <dt>서비스 ID</dt>
          <dd>
            <el-input placeholder="서비스 ID를 입력하세요." v-model="input7" class="input-with-select"></el-input>
          </dd>
          <dt>서비스 언어</dt>
          <dd>
            <el-select v-model="value" placeholder="언어를 선택하세요.">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </dd>
        </dl>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">취소</el-button>
          <el-button type="primary" @click="dialogVisible2 = false">확인</el-button>
        </span>
      </el-dialog>
    </div>
    <div>
      <p class="my_description">下面是带表格的popup第三种</p>
      <el-button type="text" @click="dialogVisible3 = true">点击打开带表格的popup</el-button>
      <el-dialog custom-class="pop_type2" title="파일 업로드" :visible.sync="dialogVisible3" width="590px" :before-close="handleClose">
        <dl class="my_information">
          <dt>파일 업로드</dt>
          <dd class="have_two_bt">
            <el-input placeholder="" v-model="input3" class="input-with-select">
            </el-input>
            <el-button slot="append">파일 선택</el-button>
            <el-button slot="append">경로 생성</el-button>
          </dd>
          <dt>파일 경로</dt>
          <dd>
            <el-input placeholder="" v-model="input7" class="input-with-select"></el-input>
          </dd>
        </dl>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">취소</el-button>
          <el-button type="primary" @click="dialogVisible3 = false">확인</el-button>
        </span>
      </el-dialog>
    </div>
    <div>
      <p class="my_description">下面是带表格的popup第四种表格没有数据</p>
      <el-button type="text" @click="dialogVisible4 = true">点击打开带表格的popup</el-button>
      <el-dialog custom-class="pop_type2 padding_bottom" title="상담원 선택" :visible.sync="dialogVisible4" width="590px" :before-close="handleClose">
        <p class="have_three_inp">
          <el-input placeholder="김엔터" v-model="input3" class="input-with-select">
          </el-input>
          <el-input placeholder="계정" v-model="input3" class="input-with-select">
          </el-input>
          <el-input placeholder="이메일" v-model="input3" class="input-with-select">
          </el-input>
          <el-button slot="append">검색</el-button>
        </p>
        <div class="have-table">검색 결과가 없습니다.</div>
      </el-dialog>
    </div>
    <div>
      <p class="my_description">下面是带表格的popup第五种表格有数据</p>
      <el-button type="text" @click="dialogVisible5 = true">点击打开带表格的popup</el-button>
      <el-dialog custom-class="pop_type2 padding_bottom" title="상담원 선택" :visible.sync="dialogVisible5" width="590px" :before-close="handleClose">
        <p class="have_three_inp">
          <el-input placeholder="김엔터" v-model="input3" class="input-with-select">
          </el-input>
          <el-input placeholder="계정" v-model="input3" class="input-with-select">
          </el-input>
          <el-input placeholder="이메일" v-model="input3" class="input-with-select">
          </el-input>
          <el-button slot="append">검색</el-button>
        </p>
        <div class="have-table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="" width="90">
            </el-table-column>
            <el-table-column prop="name" label="" width="120">
            </el-table-column>
            <el-table-column prop="address" label="">
            </el-table-column>
          </el-table>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myPopup',
  props: { 'message': String },
  data () {
    return {
      radio2: '활성화',
      dialogVisible: false,
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      dialogVisible5: false,
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      tableData: [{
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }, {
        date: '김엔터',
        name: 'nhn_enter',
        address: 'nhn.enter@nhnent.com'
      }]
    }
  },
  methods: {
    open () {
      const h = this.$createElement
      this.$msgbox({
        title: '티켓 완료',
        customClass: 'pop_type1',
        message: h('p', null, '해당 티켓을 완료 처리 하시겠습니까?'),
        showCancelButton: true,
        confirmButtonText: '확인',
        cancelButtonText: '취소'
      }).then(action => {
        this.$message({
          type: 'success',
          message: 'action: ' + action
        })
      })
    },
    open1 () {
      const h = this.$createElement
      this.$msgbox({
        title: '상담원 부재중',
        customClass: 'pop_type1',
        message: h('p', null, '해당 티켓을 완료 처리 하시겠습니까?해당 티켓을 완료 처리 하시겠습니까?해당 티켓을 완료 처리 하시겠습니까?해당 티켓을 완료 처리 하시겠습니까?'),
        confirmButtonText: '문의하기'
      }).then(action => {
        this.$message({
          type: 'success',
          message: 'action: ' + action
        })
      })
    },
    open2 () {
      this.$alert('<select class="my_select"><option value ="volvo">중복문의</option><option value ="saab">Saab</option><option value="opel">Opel</option><option value="audi">Audi</option>', 'HTML 片段', {
        dangerouslyUseHTMLString: true,
        customClass: 'pop_type1',
        showCancelButton: true,
        confirmButtonText: '확인',
        cancelButtonText: '취소'
      })
    },
    open3 () {
      this.$alert('<select class="my_select"><option value ="volvo">중복문의</option><option value ="saab">Saab</option><option value="opel">Opel</option><option value="audi">Audi</option></select><select class="my_select"><option value ="volvo">중복문의</option><option value ="saab">Saab</option><option value="opel">Opel</option><option value="audi">Audi</option></select>', 'HTML 片段', {
        dangerouslyUseHTMLString: true,
        customClass: 'pop_type1',
        showCancelButton: true,
        confirmButtonText: '확인',
        cancelButtonText: '취소'
      })
    },
    open4 () {
      this.$alert('<p class="my_message">티켓 담당자가 본인으로 변경됩니다.</p></select><select class="my_select"><option value ="volvo">중복문의</option><option value ="saab">Saab</option><option value="opel">Opel</option><option value="audi">Audi</option></select>', 'HTML 片段', {
        dangerouslyUseHTMLString: true,
        customClass: 'pop_type1',
        showCancelButton: true,
        confirmButtonText: '확인',
        cancelButtonText: '취소'
      })
    },
    open5 () {
      this.$alert('<p class="my_message">문의해주셔서 감사합니다.<br>서비스 만족도를 평가해주세요.</p><ul class="evaluate"><li class="satisfy"><a href="javascrpt:;"></a><span>만족</span></li><li class="dissatisfy"><a href=""></a><span>불만족</span></li></ul>', 'HTML 片段', {
        dangerouslyUseHTMLString: true,
        customClass: 'pop_type1',
        confirmButtonText: '확인',
        showInput: true,
        inputPlaceholder: '고객 의견을 입력해주세요.'
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  }
}
</script>
<style>
.pop_type2 .my_information {
  display: flex;
  flex-wrap: wrap;
}
.pop_type2 .my_information dt {
  width: 100px;
  margin-right: 10px;
  margin-bottom: 8px;
  color: #333;
  line-height: 32px;
  font-size: 13px;
}
.pop_type2 .my_information dd {
  width: calc(100% - 110px);
  margin-bottom: 8px;
}
.pop_type2 .my_information dd .el-input__inner,
.pop_type2 .my_information dd .el-select {
  margin-right: 0px;
  width: 100%;
}
.el-select .el-input__inner:focus,
.el-select .el-input.is-focus .el-input__inner {
  outline: none;
  border-color: #dcdfe6;
}
.pop_type2 .my_information dd .el-select .el-icon-arrow-up:before {
  content: "";
  position: absolute;
  top: 20%;
  right: 0px;
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-top.svg") no-repeat scroll
    right 0px center transparent;
}
.pop_type2 .my_information dd .el-radio-group .el-radio-button__inner {
  border-radius: 0px;
  padding: 0px 10px;
  line-height: 30px;
  box-sizing: border-box;
  font-size: 13px;
  width: 80px;
  text-align: center;
  color: #333;
}
.pop_type2
  .my_information
  dd
  .el-radio-group
  .el-radio-button__orig-radio:checked
  + .el-radio-button__inner {
  background-color: #fff;
  border: 2px solid #6a3ecf;
  line-height: 28px;
}
.el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled),
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  box-shadow: none;
}
.pop_type2 .my_information .el-input.is-disabled .el-input__inner {
  border-color: #ddd;
  background-color: #f4f4f4;
}
.pop_type2 .my_information dd.have_two_bt {
  font-size: 0;
}
.pop_type2 .my_information dd.have_two_bt .el-input {
  width: calc(100% - 158px);
  vertical-align: top;
}
.pop_type2 .my_information dd.have_two_bt .el-button {
  padding: 0px;
  line-height: 30px;
  color: #333;
  font-size: 13px;
  width: 75px;
  margin-left: 4px;
  box-sizing: border-box;
  border-color: #ddd;
  background-color: #f9f9f9;
  border-radius: 0px;
}
.pop_type2 .have_three_inp {
  display: flex;
  justify-content: space-between;
}
.pop_type2 .have_three_inp .el-input {
  width: 120px;
  margin-right: 4px;
}
.pop_type2 .have_three_inp .el-input:nth-child(3) {
  width: 210px;
}
.pop_type2 .el-dialog__body .have_three_inp .el-input .el-input__inner {
  height: 32px;
  width: 100%;
  padding: 6px 12px;
  border-radius: 0;
}
.pop_type2 .el-dialog__body .have_three_inp .el-button {
  height: 32px;
  padding: 0px;
  width: 48px;
  text-align: center;
  line-height: 32px;
  border-radius: 0;
  border: 0px;
  font-size: 13px;
  color: #fff;
  background-color: #6a3ecf;
}
.pop_type2 .el-dialog__body .have-table {
  margin-top: 19px;
  width: 100%;
  border: 1px solid #ddd;
  height: 220px;
  line-height: 218px;
  text-align: center;
  box-sizing: border-box;
  overflow: auto;
  padding: 0px 18px;
}
.pop_type2 .el-dialog__body .have-table .el-table td,
.pop_type2 .el-dialog__body .have-table .el-table th {
  padding: 0px 19px;
  font-size: 13px;
  height: 40px;
}
.pop_type2 .el-dialog__body .have-table .el-table .cell{
padding: 0;
}
.pop_type2 .el-dialog__body .have-table .el-table td:first-child,
.pop_type2 .el-dialog__body .have-table .el-table th:first-child {
  padding-left: 0px;
}
.pop_type2.padding_bottom {
  padding-bottom: 35px;
}
.el-table__footer-wrapper,
.el-table__header-wrapper {
  display: none;
}
.pop_type2 .el-dialog__body .have-table .el-table--enable-row-hover .el-table__body tr:hover>td{
  background-color: #f4efff;
}
.pop_type2 .el-dialog__body .have-table {
  scrollbar-arrow-color: red;
  scrollbar-face-color: #333;
  scrollbar-3dlight-color: #666;
  scrollbar-highlight-color: #666;
  scrollbar-shadow-color: #999;
  scrollbar-darkshadow-color: #666;
  scrollbar-track-color: #666;
  scrollbar-base-color: #f8f8f8;
}
.pop_type2 .el-dialog__body .have-table::-webkit-scrollbar {
  width: 6px;
  height: 10px;
}
.pop_type2 .el-dialog__body .have-table::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius: 2px;
}
.pop_type2 .el-dialog__body .have-table::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 10px;
}
.pop_type2 .el-dialog__body .have-table::-webkit-scrollbar-thumb:hover {
  background-color: #d9d9d9;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus{
  border-color: #C0C4CC;
}
</style>
<style>
.pop_type2 {
  box-sizing: border-box;
  border: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0px 40px;
}
.pop_type2 .el-dialog__header {
  padding: 45px 0px 25px;
  height: 28px;
}
.pop_type2 .el-dialog__header .el-dialog__title {
  color: #000;
  font-size: 19px;
  font-weight: 500;
  line-height: 28px;
}
.pop_type2 .el-dialog__header .el-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
}
.pop_type2 .el-dialog__header .el-icon-close:before {
  position: absolute;
  top: 0px;
  right: 0;
  content: " ";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-close-m.svg") no-repeat 100%;
}
.pop_type2 .el-dialog__body {
  padding: 0 0;
}
.pop_type2 .el-dialog__body .el-input-group {
  padding: 4px 0px;
}
.pop_type2 .el-dialog__body .el-input__inner {
  height: 32px;
  width: 253px;
  padding: 6px 12px;
  margin-right: 4px;
  border-radius: 0;
}
.pop_type2 .el-dialog__body .el-input-group__append,
.pop_type2 .el-input-group__prepend {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 0;
  width: 63px;
  border-radius: 0;
}
.pop_type2 .el-input-group__append .el-button,
.pop_type2 .el-input-group__append .el-select,
.pop_type2 .el-input-group__prepend .el-button,
.pop_type2 .el-input-group__prepend .el-select {
  margin: 0;
  padding: 0;
}
.pop_type2 .el-dialog__body .el-input-group__append .el-icon-search {
  width: 20px;
}
.pop_type2 .el-dialog__body .el-input-group__append .el-icon-search:before {
  position: absolute;
  top: 6px;
  left: 6px;
  content: " ";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-search.svg") no-repeat 100%;
}
.pop_type2 .el-button [class*="el-icon-"] + span {
  margin-left: 1px;
  color: #333;
  font-size: 13px;
}
.pop_type2 .button_s.write_b {
  padding: 0px 8px;
  height: 24px;
  line-height: 24px;
  font-size: 13px;
  text-align: left;
  border-radius: 2px;
  display: inline-block;
  vertical-align: top;
  margin: 4px 0px;
}
.pop_type2 .write_b.el-button--primary {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  color: #333;
}
.pop_type2 .write_b.el-button--primary:active,
.pop_type2 .write_b.el-button--primary:focus,
.pop_type2 .write_b.el-button--primary:hover,
.pop_type2 .write_b.el-button--primary.is-disabled,
.pop_type2 .write_b.el-button--primary.is-disabled:active,
.pop_type2 .write_b.el-button--primary.is-disabled:focus,
.pop_type2 .write_b.el-button--primary.is-disabled:hover {
  color: #333;
  background: #f9f9f9;
  border: 1px solid #aaa;
}
.pop_type2 .write_b.el-button--primary.is-disabled,
.pop_type2 .write_b.el-button--primary.is-disabled:active,
.pop_type2 .write_b.el-button--primary.is-disabled:focus,
.pop_type2 .write_b.el-button--primary.is-disabled:hover {
  opacity: 0.2;
}
.pop_type2 .el-button + .el-button {
  margin-left: 0px;
}
.pop_type2 .el-tree {
  height: 378px;
  border: 1px solid #ddd;
  overflow: auto;
}
.pop_type2 .el-dialog__footer {
  padding: 35px 0px;
}
.pop_type2 .el-dialog__footer .el-button {
  padding: 0px 30px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  color: #fff;
  border: 0px;
  border-radius: 2px;
}
.pop_type2 .el-dialog__footer .el-button.el-button--default {
  background-color: #aaa;
}
.pop_type2 .el-dialog__footer .el-button.el-button--primary {
  background-color: #6a3ecf;
}
.pop_type2 .el-icon-caret-right:before {
  display: none;
}
.pop_type2 .el-tree .el-tree-node__content {
  height: 40px;
  line-height: 40px;
}
.pop_type2 .el-checkbox__inner:hover {
  border-color: #ddd;
}
.pop_type2 .el-tree-node__content:hover {
  background-color: #ebe1ff;
}
.pop_type2 .el-tree-node:focus > .el-tree-node__content {
  background-color: #fff;
  color: #6a3ecf;
}
.pop_type2 .el-checkbox__input.is-checked .el-checkbox__inner,
.pop_type2 .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #fff;
  border: 1px solid #ddd;
}
.pop_type2
  .el-tree
  .el-tree-node.is-expanded
  .el-tree-node__content
  .el-checkbox__inner::before {
  content: "-";
  font-size: 12px;
  position: absolute;
  top: -2px;
  line-height: 12px;
  text-align: center;
  left: -2px;
  width: 15px;
  height: 15px;
}
.pop_type2
  .el-tree
  .el-tree-node
  .el-tree-node__content
  .el-checkbox__inner::before {
  content: "+";
  font-size: 12px;
  position: absolute;
  top: -1.5px;
  line-height: 12px;
  text-align: center;
  left: -2px;
  width: 15px;
  height: 15px;
  border: 1px solid #ddd;
  transform: scale(1);
}
.pop_type2 .el-checkbox__inner {
  border: none;
}
.pop_type2 .el-checkbox__inner::after {
  display: none;
}
.pop_type2 .el-checkbox__input.is-checked .el-checkbox__inner,
.pop_type2 .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  border: none;
}
.pop_type2 .el-tree {
  scrollbar-arrow-color: red;
  scrollbar-face-color: #333;
  scrollbar-3dlight-color: #666;
  scrollbar-highlight-color: #666;
  scrollbar-shadow-color: #999;
  scrollbar-darkshadow-color: #666;
  scrollbar-track-color: #666;
  scrollbar-base-color: #f8f8f8;
}
.pop_type2 .el-tree::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.pop_type2 .el-tree::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius: 2px;
}
.pop_type2 .el-tree::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 10px;
}
.pop_type2 .el-tree::-webkit-scrollbar-thumb:hover {
  background-color: #d9d9d9;
}
</style>
<style>
* {
  list-style-type: none;
}
.my_description {
  font-size: 16px;
  margin: 10px 0px;
}
.pop_type1 {
  width: 400px;
  box-sizing: border-box;
  border: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0px 40px;
}
.pop_type1 .el-message-box__header {
  padding: 45px 0px 0px;
  height: 28px;
  line-height: 28px;
}
.pop_type1 .el-message-box__header .el-message-box__title {
  color: #000;
  font-size: 19px;
  font-weight: 500;
  line-height: 28px;
}
.pop_type1 .el-message-box__header .el-message-box__headerbtn {
  position: absolute;
  top: 20px;
  right: -20px;
}
.pop_type1 .el-message-box__headerbtn .el-icon-close:before {
  position: absolute;
  top: 0px;
  right: 0;
  content: " ";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-close-m.svg") no-repeat 100%;
}
.pop_type1 .el-message-box__content {
  padding: 25px 0px 0px;
  line-height: 20px;
  color: #555;
  font-size: 14px;
}
.pop_type1 .el-message-box__message p {
  line-height: 20px;
}
.pop_type1 .el-message-box__btns {
  padding: 35px 0px;
}
.pop_type1 .el-button--small,
.pop_type1 .el-button--small.is-round {
  padding: 8px 30px;
  line-height: 24px;
  color: #fff;
  font-size: 15px;
  background-color: #aaa;
  border: 0;
}
.pop_type1 .el-button--primary {
  background-color: #6a3ecf;
}
.pop_type1 .el-message-box__btns button:nth-child(2) {
  margin-left: 4px;
}
.pop_type1 .el-button:focus,
.pop_type1 .el-button:hover {
  background-color: #aaa;
  color: #fff;
}
.pop_type1 .el-button--primary:focus,
.pop_type1 .el-button--primary:hover {
  background-color: #6a3ecf;
}
.pop_type1 .my_select {
  height: 32px;
  margin: 4px 0px;
  width: 100%;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  padding: 6px 30px 6px 12px;
  line-height: 20px;
  color: #333;
  font-size: 13px;
  appearance: none;
  background: url("../assets/images/ic-arrow-solid-bottom.svg") no-repeat scroll
    right 5px center transparent;
}
.pop_type1 .my_select:focus {
  outline: none;
}
.pop_type1 .my_message {
  margin-bottom: 10px;
  color: #555;
  font-size: 13px;
  line-height: 20px;
}
.pop_type1 .evaluate {
  height: 122px;
  width: 100%;
  padding: 0px 63px 22px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.pop_type1 .evaluate li {
  width: 80px;
  text-align: center;
}
.pop_type1 .evaluate li a {
  display: block;
  width: 80px;
  height: 70px;
  margin: auto;
}
.pop_type1 .evaluate li.satisfy a {
  background: url("../assets/images/ic-chat-satisfaction-inactive.svg")
    no-repeat center center;
  background-size: contain;
}
.pop_type1 .evaluate li.satisfy a:active {
  background: url("../assets/images/ic-chat-satisfaction-active.svg") no-repeat
    center center;
  background-size: contain;
}
.pop_type1 .evaluate li.satisfy a:hover {
  background: url("../assets/images/ic-chat-satisfaction-active.svg") no-repeat
    center center;
  background-size: contain;
}
.pop_type1 .evaluate li.dissatisfy a {
  background: url("../assets/images/ic-chat-dissatisfaction-inactive.svg")
    no-repeat center center;
  background-size: contain;
}
.pop_type1 .evaluate li span {
  display: block;
  line-height: 20px;
  color: #333;
}
.pop_type1 .el-message-box__input {
  padding-top: 4px;
}
.pop_type1 .el-message-box__input .el-input__inner {
  height: 32px;
  line-height: 32px;
  padding: 0 12px;
  border: 1px solid #ddd;
}
.pop_type1 .el-message-box__errormsg {
  min-height: 0;
  margin-top: 4px;
}
</style>
