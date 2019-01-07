<template>
  <div class="page-error">
    <div class="page-error_img"></div>
    <div class="page-error_msg">没有权限，或者页面不存在</div>
    <div>
      <router-link to="/">
        返回首页
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageError'
}
</script>
<style lang="less" type="text/less">
.page-error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;

  .page-error_img{
    width: 256px;
    height: 205px;
    display: block;
    margin-top: -50px;
  }

  .page-error_msg{
    margin: 25px 0;
  }
}
</style>
