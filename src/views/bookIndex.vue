<template>
  <div class="home">
    <Header headerTitle="元尊" headerR="首页" />
    <book-desc :bookDesc="bookDesc" />
    <div class="btnList">
      <span>
        开始阅读
      </span>
      <span>
        给老妈写的
      </span>
    </div>
    <div class="intro">{{ bookDesc.bookName }}小说简介</div>
    <div class="intro_text">
      {{bookDesc.description}}
    </div>
    <div class="intro">正文</div>
    <chapter-list :chapterList="chapterList" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { indexUrl, registerUrl } from "../../config/api.js";
import { getData } from "../../services/request.js";
import Header from "../components/header";
import bookDesc from "../components/bookDesc";
import chapterList from '../components/chapterList'
import func from '../../vue-temp/vue-editor-bridge.js';

export default {
  name: "Home",
  components: {
    // HelloWorld
    Header,
    bookDesc,
    chapterList
  },
  data() {
    return {
      bookDesc: {},
      chapterList:[
        {id:1,title:'第一章 蟒雀吞龙'},
        {id:2,title:'第二章  源纹'},
        {id:3,title:'第三章  苏幼微'},
        {id:4,title:'第四章 源纹的力量'},
        {id:5,title:'第五章   齐岳，柳溪'},
        {id:6,title:'第六章  祖地宗祠'},
        {id:7,title:'第七章 神秘之地'},
        {id:8,title:'第八章 寻八脉'}
      ]
    };
  },
  async created() {
    // console.log(11111,getData);
    
  },
  async mounted() {
    let data=await getData({url:indexUrl});
    this.bookDesc=data.data.data[0];
    console.log(this.bookDesc,registerUrl);
    // let arr=data.data.data[0].chapterList;
    /* arr.forEach(item => {
      console.log(item);
    }); */
    
    // console.log(arr);
    // console.log(data1);
  }
};
</script>
<style lang="less" scoped>
.home {
  .btnList {
    padding: 5px 0 10px 0;
    span {
      display: inline-block;
      background: #65bbec;
      border-radius: 3px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      width: 49%;
      &:first-child {
        margin-right: 5px;
      }
    }
  }
  .intro{
    border-bottom: 1px solid #65bbec;
    background-color: #ECF0F0;
    text-align: left;
    height: 35px;
    line-height: 35px;
    padding-left: 8px;
    font-weight: 700;
  }
  .intro_text{
    padding: 10px;
    font-size: 14px;
    color: #999;
    text-align: left;
  }
}
</style>
