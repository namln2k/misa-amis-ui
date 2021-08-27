<template>
  <div @keydown.enter="$emit('click')" @click="$emit('click')" class="base-second-button" :tabindex="tabindex">
      {{ text }}
  </div>
</template>

<script>
export default {
  name: "BaseSecondButton",
  props: {
    id: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    tabindex: {
      type: String,
      required: false,
    }
  }
};
</script>

<style scoped>
@import url("../../css/base/base-second-button.css");
</style>