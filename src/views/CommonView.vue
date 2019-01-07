<template>
  <div >
    <div class="main-wrap flex">
      <div class="main-content flex-1">
        <router-view class="main-scroll" ></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonView'
}
</script>
