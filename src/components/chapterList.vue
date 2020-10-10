<template>
  <div class="chapterList">
    <ul>
      <li v-for="(item, index) in currentChapter" :key="index">
        {{ item.title }}
      </li>
    </ul>
    <div class="list_page">
      <span class="btn_pre" @click="prePage">上一页</span>
      <span class="middle">
        <select name="pageselect" id="" @change="changePage($event)">
          <option
            v-for="(item, index) in pageArr"
            :key="index"
            :value="item.pageSelectId"
            :selected="item.pageSelectId==pageSelectId?'select':''"
            >{{ item.pageContent }}</option
          >
        </select>
      </span>
      <span class="btn_next" @click="nextPage">下一页</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "chapterList",
  props: {
    chapterList: Array,
    default: () => []
  },
  data() {
    return {
      currentChapter: [],
      pageSelectId: 1,
      pageArr: [],
      pageLenth:0
    };
  },
  watch: {
    chapterList: {
      handler(newV) {
        if (newV) {
          this.currentChapter = newV.slice(0, 20);
          this.pageLenth = newV.length;
          for (let i = 0; i < this.pageLenth / 20; i++) {
            this.pageArr.push({
              pageSelectId: i + 1,
              pageContent: `第${i * 20 + 1} - ${(i + 1) * 20}章`
            });
          }
        }
      }
    },
    immediate: true,
    deep: true
  },
  methods: {
    changePage(e) {
      this.pageSelectId = e.target.value;
      this.currentChapter = this.chapterList.slice(
        (this.pageSelectId - 1) * 20,
        this.pageSelectId * 20
      );
    },
    prePage() {
      this.pageSelectId++;
      this.currentChapter = this.chapterList.slice(
        (this.pageSelectId - 1) * 20,
        this.pageSelectId * 20
      );

    },
    nextPage() {
      // console.log(1111);
      this.pageSelectId++;
      this.currentChapter = this.chapterList.slice(
        (this.pageSelectId - 1) * 20,
        this.pageSelectId * 20
      );
      // let selectO=document.querySelectorAll('select')
    }
  }
};
</script>
<style lang="less" scoped>
.chapterList {
  li {
    border-bottom: 1px solid #efefef;
    text-align: left;
    text-indent: 10px;
    height: 40px;
    line-height: 40px;
    color: #000;
    overflow: hidden;
  }
  .list_page {
    margin: 10px;
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    display: flex;
    .btn_pre,
    .btn_next {
      width: 25%;
    }
    .middle {
      flex: 1;
      border-radius: 3px;
      select {
        border: 1px solid #dfdfdf;
        box-sizing: border-box;
        color: #999;
        border-radius: 3px;
        display: inline-block;
        // float: left;
        font-style: normal;
        height: 32px;
        line-height: 32px;
        text-align: center;
        width: 100%;
        // padding-bottom: 2px;
        option {
          padding: 0px 2px 1px;
        }
      }
    }
  }
}
</style>