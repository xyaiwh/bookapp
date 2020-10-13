<template>
  <div class="chapter">
    <Header :headerTitle="chapterDesc.title" headerR="首页" />
    <div class="chapter_set">
      <div class="set_left">
        <span>字:</span>
        <span>大</span>
        <span>中</span>
        <span>小</span>
      </div>
      <div class="set_right">
        <span>护眼</span>
        <span>白天</span>
      </div>
    </div>
    <div class="chapter_select">
      <span @click="preChapter">上一章</span>
      <span>返回目录</span>
      <span @click="nextChapter">下一章</span>
    </div>
    <div class="content" v-html="chapterDesc.content"></div>
  </div>
</template>
<script>
import { getData } from "../../services/request";
import { chapterUrl } from "../../config/api";
import Header from "../components/header";
export default {
  name: "bookChapter",
  components: {
    Header
  },
  data() {
    return {
      chapterDesc: {},
      chapterId: 1
    };
  },
  watch: {
      '$route':async function(newUrl,oldUrl){
        if(newUrl.path!=oldUrl.path){
            this.chapterId = this.$route.params.pageId;
            let url = `${chapterUrl}?bookId=1001&chapterId=${this.chapterId}`;
            let data = await getData({ url: url });
            this.chapterDesc = data.data.data[0];
        }
  }
  },
  async mounted() {
    this.chapterId = this.$route.params.pageId;
    let url = `${chapterUrl}?bookId=1001&chapterId=${this.chapterId}`;
    let data = await getData({ url: url });
    this.chapterDesc = data.data.data[0];
    console.log(data.data.data[0], this.$route.params.pageId);
  },
  methods: {
    preChapter() {
      if (this.chapterId == 1) {
        return;
      }
      this.chapterId--;
      this.$router.push({
        name: "bookChapter",
        params: { pageId: this.chapterId }
      });
    //   window.location.reload();
    },
    nextChapter() {
      // if(this.chapterId)
      this.chapterId++;
      this.$router.push({
        name: "bookChapter",
        params: { pageId: this.chapterId }
      });
    //   window.location.reload();
    }
  }
};
</script>
<style lang="less" >
.chapter {
  background-color: rgb(251, 246, 236);
  .chapter_set {
    display: flex;
    justify-content: space-between;
    background-color: #ececec;
    .set_left,
    .set_right {
      padding: 15px 12px;
      color: #0065b5;
      span {
        padding: 4px 5px;
        border: 1px solid #0065b5;
        border-radius: 3px;
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }
  .chapter_select {
    display: flex;
    justify-content: space-evenly;
    margin: 10px 5px;
    span {
      display: inline-block;
      width: 100%;
      padding: 10px;
      background-color: rgb(244, 240, 233);
      border: 1px solid rgb(236, 230, 218);
      color: green;
    }
  }
  .content {
    text-align: left;
    text-indent: 20px;
    padding: 10px;
    p {
      line-height: 25px;
      &::after {
        content: "";
        display: block;
        height: 20px;
      }
    }
  }
}
</style>