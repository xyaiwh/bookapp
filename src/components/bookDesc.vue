<template>
  <div class="book-desc">
    <div class="bookImg">
      <img
        src="http://www.shuquge.com/files/article/image/5/5809/5809s.jpg"
        alt=""
      />
    </div>
    <div class="bookText">
        <p>{{bookDesc.bookName}}</p>
        <p>作者：{{bookDesc.author}}</p>
        <p>分类：{{bookDesc.category}}</p>
        <p>状态：{{bookDesc.status == '0'?'连载中':'已完结'}}</p>
        <!-- <p>更新：{{bookDesc.bookName}}</p> -->
        <!-- <p>最新：{{bookDesc.bookName}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "bookDesc",
  props: {
    bookDesc: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.book-desc {
  display: flex;
  margin: 10px 0 10px 10px;
  .bookImg {
    border: 1px solid #DEDEDE;
    padding: 5px 5px 0 5px;
    overflow: hidden;
    img{
        width: 92px;
    height: 116px;
    }
  }
  .bookText{
      p{
          text-align: left;
          text-indent: 8px;
          color:#999;
          &:first-child{
              font-size: 20px;
              font-weight: 600;
              color: #000;
            //   text-indent: -30px;
          }
      }
      
  }
}
</style>