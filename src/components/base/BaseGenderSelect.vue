<template>
  <div class="field gender-field">
    <div class="label">
      Giới tính
      <span v-if="required" style="color: red; font-weight: 400">*</span>
    </div>
    <div class="gender-options">
      <div class="option-male">
        <input type="radio" id="male" name="gender" />
        <label for="male">Nam</label>
      </div>
      <div class="option-female">
        <input type="radio" id="female" name="gender" />
        <label for="female">Nữ</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTextInput",
  props: {
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    content: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
@import url("../../css/base/base-input.css");
</style>