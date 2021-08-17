<template>
  <p class="base-button">
      {{ text }}
  </p>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  }
};
</script>

<style scoped>
@import url("../../css/base/base-button.css");
</style>