<template>
  <section id="app-container" class="app-wrapper">
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
  },
};
</script>
<style lang="less" type="text/less">
.app-wrapper{
  height: 100%;
}
</style>
