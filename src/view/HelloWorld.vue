<template>
  <div class="hello">
    <text-list></text-list>
  </div>
</template>

<script>
var Child = {
  props: { 'message': String },
  template: `<ul class="text_list">
              <li :class="{choose:index==curr}" v-for="(item,index) in courseList" :key="item.name" @click.once="add_num(item.price,index)" @contextmenu.prevent="show(item)">
                <div class="left_box">
                  <img :src="item.poster" alt="">
                  <span v-if="item.buyNumber">{{item.buyNumber}}人想报名</span>
                  <span v-if="item.enrollment">{{item.enrollment}}人已参加</span>
                </div>
                <div class="right_box">
                  <h3>{{item.name}}</h3>
                  <p class="free" v-if="item.free">免费</p>
                  <p class="play_back" v-if="item.playback">回放</p>
                  <p class="price" v-if="item.price">￥{{item.price}}</p>
                </div>
              </li>
              <p class="add">总共：{{num}}</p>
            </ul>`,
  data () {
    return {
      num: [],
      curr: 0,
      isDisable: false,
      courseList: [
        {
          name: 'Web前端开发之JavaScript(Js)精英课堂【渡一教育】',
          free: true,
          playback: false,
          price: 0,
          buyNumber: 0,
          enrollment: 4942,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBsSud06XlZnJACsTWd7OSA5phIFPRTNibFBeuT8jRjy00Jb5ticSEKYUnpUYdBCicH2U/356'
        },
        {
          name: 'Web前端开发之HTML+CSS精英课堂【渡一教育】',
          free: true,
          playback: false,
          price: 0,
          buyNumber: 0,
          enrollment: 2982,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBDFLdArBwf70PjMrL6bq0OI9LesEsskk1iamJKibriaic0QkBZhINoDuN0DicaojkqyQjk/356'
        },
        {
          name: '淘宝商城项目实战开发【渡一教育】',
          free: true,
          playback: false,
          price: 0,
          buyNumber: 0,
          enrollment: 1742,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDBpXKL1sgAOKcbSz0Od2abiaqdJibiaDDQWfmrVNBCFrIpbTQKlNyWbPg5Uo1dnT7Znk/356'
        },
        {
          name: '零基础WEB前端入门',
          free: false,
          playback: true,
          price: 9.9,
          buyNumber: 2514,
          enrollment: 0,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCRlDgtxVbmyclxP9fDUYmnuqAFbN5mYsncrPrVyQbtA3fNfuZ3qicSe1r7Ppt7tICs/356'
        },
        {
          name: 'React顶级企业实战，全流程制作淘票票WebApp【渡一教育】',
          free: false,
          playback: true,
          price: 399,
          buyNumber: 670,
          enrollment: 0,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLB2CyXIxsb8iaAUibBB9mzlkSgKNU7GiciaYxG1SicoLjkiahZ3ia54eZWbtCGDkFyvMo0uKk/356'
        },
        {
          name: '原生JS贪吃蛇游戏实战开发【渡一教育】',
          free: true,
          playback: false,
          price: 0,
          buyNumber: 0,
          enrollment: 1123,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCfsOGnxjhUXFA6SHMOu0fMUicuucRlIVNo9zBnnLiacovMnePD6586QlRj2qvwudbn8/356'
        },
        {
          name: '原生JS扫雷游戏实战开发【渡一教育】',
          free: true,
          playback: false,
          price: 0,
          buyNumber: 0,
          enrollment: 631,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDaTljUSVGk2eqS1MCT3DwDqxgs7KhfMf3411SXQkRvmiaicIuz47ydO27zGPWK97wicw/356'
        },
        {
          name: '你不知道的Javascript【渡一教育】',
          free: true,
          playback: false,
          price: 0,
          buyNumber: 0,
          enrollment: 1696,
          poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCelo2lyibtrxDia7aq7tC0LE1Lcz2LVoDqhQy5tnOHicTzWhLuvPekL35rEmwTdgNuwI/356'
        }
      ]
    }
  },
  methods: {
    add_num (price, index) {
      if (price.length === 0) {
        this.num = 0
      } else {
        this.num = Number(this.num) + Number(price)
        this.isDisable = true
      }
      this.isDisable = true
      this.curr = index
    },
    show (item) {
      return {
      }
    }
  }
}
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: []
    }
  },
  components: {
    'text-list': Child
  }
}
</script>
<style>
* {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.text_list {
  border: 1px solid #ededed;
  margin: 30px auto 0;
  width: 660px;
}
.text_list li {
  font-size: 0;
}
.text_list li .left_box,
.text_list li .right_box {
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  position: relative;
}

.text_list li .left_box img {
  width: 170px;
}
.text_list li .left_box span {
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: #ededed;
}
.text_list li .right_box {
  padding-left: 20px;
}
.text_list li .right_box h3 {
  color: dimgray;
  font-size: 15px;
}
.text_list li .right_box .free {
  color: #e63464;
  font-weight: 600;
}
.text_list li .right_box .play_back {
  border: 1px solid rgb(6, 241, 163);
  display: inline-block;
  color: rgb(10, 246, 168);
}
.text_list li .right_box .price {
  color: coral;
}
.text_list .add {
  margin-top: 15px;
  font-size: 16px;
  padding-left: 10px;
}
.choose {
  opacity: 0.3;
}
</style>
