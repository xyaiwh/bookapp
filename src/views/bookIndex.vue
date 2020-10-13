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
    <chapter-list :chapterList="this.bookDesc.chapterList" />
    <div class="footer">
1111
    </div>
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
// import func from '../../vue-temp/vue-editor-bridge.js';

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
    };
  },
  
  async mounted() {
    let data=await getData({url:indexUrl});
    this.bookDesc=data.data.data[0];
    // this.$route.meta.title = '要修改的内容'
    let viewport=document.querySelectorAll('meta')[2];
    viewport.content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0';
    console.log(registerUrl,viewport);
    console.log(Array.isArray(this.bookDesc.chapterList)); 
    this.bookDesc.chapterList.sort((a,b)=>{
      return a.pageId-b.pageId
    });
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
  .footer{
    height: 30px;
    background: #ECF0F0;
    padding: 3px 0 0;
    border-top: 1px solid #f1f1f1;
    line-height: 26px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 120px;
  }
}
</style>
