<template>
  <div class="header">
    <div class="header-l">
      {{ headerL }}
    </div>
    <h1>{{ headerTitle }}</h1>
    <div class="header-r">
      {{ headerR }}
    </div>
  </div>
</template>

<script>
export default {
  name: "headerBar",
  props: {
    headerTitle: String,
    headerL: {
      type: String,
      default: "返回"
    },
    headerR: {
      type: String,
      default: "个人中心"
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  background-color: #007bb1;
  h1 {
    display: flex;
    flex: 1;
    font-size: 18px;
    padding: 15px 0;
    justify-content: center;
    align-items: center;
  }
  .header-l,
  .header-r {
    display: flex;
    border-radius: 3px;
    color: #fff;
    background-color: #65bbec;
    font-size: 14px;
    margin: 12px 10px;
    padding: 0 10px;
    justify-content: center;
    align-items: center;
  }
}
</style>