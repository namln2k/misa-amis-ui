<template>
  <div id="app">
    <TheSidebar></TheSidebar>
    <TheHeader></TheHeader>
    <ThePage></ThePage>
  </div>
</template>

<script>
import TheSidebar from "./components/layout/TheSidebar.vue"
import TheHeader from "./components/layout/TheHeader.vue"
import ThePage from "./components/layout/ThePage.vue"

export default {
  name: 'App',
  components: {
    TheSidebar,
    TheHeader,
    ThePage
  }
}
</script>

<style>
@import url("./css/common/main.css");
@import url("./css/base/base.css");
</style>
