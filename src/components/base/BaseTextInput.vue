<template>
  <div class="field">
    <div class="label">
      {{ label }}
      <span v-if="required" style="color: red; font-weight: 400">*</span>
    </div>
    <input
      :id="this.id"
      type="text"
      class="text-input"
      :value="content"
      ref="input"
      tabindex="2"
    />
  </div>
</template>

<script>
export default {
  name: "BaseTextInput",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
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
  methods: {
    focusEmployeeCode() {
      this.$refs.input.focus();
    },
    getValue() {
      return this.$refs.input.value;
    },
  },
};
</script>

<style scoped>
@import url("../../css/base/base-input.css");
</style>