<template>
  <div class="field gender-field">
    <div class="label">
      Giới tính
      <span v-if="required" style="color: red; font-weight: 400">*</span>
    </div>
    <div class="gender-options">
      <label for="male" class="option-male">
        <span class="option-label">Nam</span>
        <input
          type="radio"
          name="gender"
          value=1
          v-model="genderSelected"
          tabindex="2"
          ref="male"
        />
        <span class="radio-border">
          <span class="radio"></span>
        </span>
        <span class="radio-background"></span>
      </label>
      <label for="female" class="option-female">
        <span class="option-label">Nữ</span>
        <input
          type="radio"
          name="gender"
          value=0
          v-model="genderSelected"
          tabindex="2"
          ref="female"
        />
        <span class="radio-border">
          <span class="radio"></span>
        </span>
        <span class="radio-background"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseGenderSelect",
  props: {
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    content: {
      type: Number,
      required: false,
      default: -1,
    },
  },
  data() {
    return {
      genderSelected: -1,
    };
  },
  methods: {
    getValue() {
      return this.genderSelected;
    },
  },
  mounted() {
    if (this.content == 1) {
      this.$refs.male.checked = true;
    } else 
    if (this.content == 0) {
      this.$refs.female.checked = true;
    }
  }
};
</script>

<style scoped>
@import url("../../css/base/base-input.css");
</style>