<template>
  <div class="loading-screen">
    <div class="loading-part">
      <div class="loading-circle"></div>
      <p class="loading-text">{{ text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseLoading",
  data() {
    return {
      text: "Loading",
    };
  },
};
</script>
<style>
@import url("../../css/base/base-loading.css");
</style>