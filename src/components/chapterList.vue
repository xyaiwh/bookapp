<template>
  <div class="chapterList">
    <ul>
      <li v-for="(item, index) in chapterList" :key="index">
        {{ item.title }}
      </li>
    </ul>
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
    return {};
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
}
</style>