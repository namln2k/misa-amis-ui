<template>
  <div :class="{ open: openOptions }">
    <div>{{ inputLabel }}</div>
    <div
      ref="inputWrapper"
      class="input-wrapper"
      :class="{ 'border-red': !isValidate, 'border-green': isFocus }"
    >
      <input
        :id="id"
        ref="inputField"
        class="info-uniform combobox-input"
        type="text"
        autocomplete="off"
        :value="content"
        @focus="updateValue($event.target.value)"
        @input="
          ($event) => {
            this.selected = '';
            this.hovered = '';
            updateValue($event.target.value);
          }
        "
        @click="updateValue($event.target.value)"
        @blur="onBlur"
        @keydown.enter="enter"
        @keydown.down="down"
        @keydown.up="up"
        tabindex=11
      />
      <div
        class="arrow-button"
        :class="{ open: showAll }"
        @click="showAllOptions"
      >
        V
      </div>
    </div>
    <div class="options">
      <div
        class="option"
        v-for="(option, index) in matches"
        :key="index"
        :class="{
          active: isActive(option.text),
          hovered: isHover(option.text),
        }"
        @mousedown="onOptionClicked(index)"
      >
        <div class="checkmark"></div>
        <div>{{ option.text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AutoComplete",
  data() {
    return {
      open: false,
      current: -1,
      isValidate: true,
      isFocus: false,
      showAll: false,
      selected: "",
      hovered: "",
    };
  },

  props: {
    content: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    id: {
        type: String,
        required: false,
    },
    inputLabel: {
        type: String,
        required: false,
    },
  },

  computed: {
    matches() {
      if (!this.showAll) {
        return this.options.filter((obj) => {
          if (this.content != null && this.content != "") {
            return (
              obj.text
                .toLocaleUpperCase()
                .indexOf(this.content.toLocaleUpperCase()) > -1
            );
          } else {
            return this.options;
          }
        });
      } else {
        return this.options;
      }
    },
    openOptions() {
      return this.matches.length !== 0 && this.open === true;
    },
  },
  methods: {
    updateValue(text) {
      this.showAll = false;
      this.isFocus = true;
      if (this.open == false) {
        this.open = true;
      }
      if (
        this.options.some((e) =>
          e.text.toLocaleUpperCase().includes(text.toLocaleUpperCase())
        )
      ) {
        this.isValidate = true;
      } else {
        this.isValidate = false;
      }
      this.$emit("changeValue", this.id, text);
    },
    onBlur() {
      if (this.content == "") {
        this.isValidate = true;
      } else if (
        !this.options.some((e) => e.text.localeCompare(this.content))
      ) {
        this.isValidate = false;
      }
      this.isFocus = false;
      this.open = false;
      this.showAll = false;
    },
    enter() {
      this.$emit("input", this.matches[this.current].text);
      this.selected = this.matches[this.current].text;
      this.open = false;
      this.showAll = false;
      this.hovered = "";
      this.$emit("changeValue", this.id, this.selected);
    },
    up() {
      if (this.current > 0) {
        this.current--;
        this.hovered = this.matches[this.current].text;
      } else {
        this.current = this.matches.length - 1;
        this.hovered = this.matches[this.current].text;
      }
    },
    down() {
      if (this.current < this.matches.length - 1) {
        this.current++;
        this.hovered = this.matches[this.current].text;
      } else {
        this.current = 0;
        this.hovered = this.matches[this.current].text;
      }
    },
    isHover(text) {
      return text == this.hovered;
    },
    isActive(text) {
      return text == this.selected;
    },
    onOptionClicked(index) {
      this.$emit("input", this.matches[index].text);
      this.selected = this.matches[index].text;
      this.current = index;
      this.open = false;
      this.showAll = false;
      this.hovered = "";
      this.$emit("changeValue", this.id, this.selected);
    },
    showAllOptions() {
      this.showAll = true;
      this.open = true;
      this.hovered = "";
      this.isValidate = true;
    },
  },

  mounted() {
    this.selected = this.content;
    this.isValidate = true;
    document.addEventListener("click", (event) => {
      let target = event.target;
      let inputWrapper = this.$refs.inputWrapper;
      if (inputWrapper != null) {
        if (!inputWrapper.contains(target)) {
          this.onBlur();
        }
      }
    });
  },

  watch: {
    content: function (newVal) {
      this.selected = newVal;
      this.$emit("changeValue", this.id, newVal);
    },
  },
};
</script>

<style scoped>
@import url("../../css/base/base-combobox.css");
</style>