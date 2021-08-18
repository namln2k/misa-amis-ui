<template>
  <div class="base-second-button">
      {{ text }}
  </div>
</template>

<script>
export default {
  name: "BaseSecondButton",
  props: {
    text: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped>
@import url("../../css/base/base-second-button.css");
</style>