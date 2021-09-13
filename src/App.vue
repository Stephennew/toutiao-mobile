<!--
 * @Author: jswang
 * @Date: 2021-09-13 15:22:38
 * @LastEditTime: 2021-09-13 15:45:43
-->
<template>
  <div id="app">
    <h1>头条项目</h1>
<!-- 路由的出口 很重要 不能删除 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  // 建议每个组件都取一个名字,用的时候很有意义
  name: 'App'
}
</script>
<style lang="less"></style>
