<template>
  <div @keydown.enter="$emit('click')" @click="$emit('click')" id="id" class="base-button" :tabindex="tabindex">
      {{ text }}
  </div>
</template>

<script>
export default {
  name: "BaseButton",
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
@import url("../../css/base/base-button.css");
</style>