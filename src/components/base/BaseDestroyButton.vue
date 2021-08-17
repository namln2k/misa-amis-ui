<template>
  <p class="base-destroy-button">
      {{ text }}
  </p>
</template>

<script>
export default {
  name: "BaseDestroyButton",
  props: {
    text: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped>
@import url("../../css/base/base-destroy-button.css");
</style>