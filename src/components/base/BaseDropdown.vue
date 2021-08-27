<template>
  <div :class="{ open: openOptions }" class="dropdown-container">
    <div class="dropdown" ref="dropdown">
      <input
        type="text"
        class="option-input"
        readonly="true"
        :focus="openOptions"
        :value="selectedOption"
      />
      <div class="dropdown-arrow" @click="onArrowClick">
        <div class="arrow-icon" ref="arrowIcon"></div>
      </div>
    </div>
    <div class="options">
      <div
        class="option"
        v-for="(option, index) in options"
        :key="index"
        :class="{ active: isActive(option) }"
        @click="selectOption(option)"
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseDropdown",
  props: {
    options: {
      type: Array,
      required: true,
    },
    selectedOption: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      openOptions: false,
      activeOption: "",
    };
  },
  computed: {},
  watch: {
    openOptions: function () {
      let deg = this.openOptions ? 180 : 0;
      let arrow = this.$refs.arrowIcon;
      arrow.style.transform = "rotate(" + deg + "deg)";
    },
  },
  methods: {
    onArrowClick() {
      this.openOptions = !this.openOptions;
    },
    selectOption(option) {
      this.$emit("changeOption", option);
      this.activeOption = option.text;
    },
    isActive(option) {
      return option.text == this.activeOption;
    },
    onBlur() {
      this.openOptions = false;
    },
  },
  created() {
    this.activeOption = this.selectedOption;
  },
  mounted() {
    document.addEventListener("click", (event) => {
      let target = event.target;
      let inputWrapper = this.$refs.dropdown;
      if (inputWrapper != null) {
        if (!inputWrapper.contains(target)) {
          this.openOptions = false;
        }
      }
    });
  },
};
</script>

<style scoped>
@import url("../../css/base/base-dropdown.css");
</style>