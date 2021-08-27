<template>
  <div class="field">
    <div class="label">
      {{ label }}
      <span v-if="required" style="color: red; font-weight: 400">*</span>
    </div>
    <input
      :id="this.id"
      type="date"
      class="text-input"
      :max="getMaxDate()"
      :value="content"
      tabindex="2"
      ref="input"
    />
  </div>
</template>

<script>
import Utils from "../../scripts/utils";

export default {
  name: "BaseDateInput",
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
  data() {
    return {
      utils: Object,
    };
  },
  created() {
    this.utils = new Utils();
  },
  methods: {
    getMaxDate() {
      return this.utils.Today().format("YYYY-MM-DD");
    },
    getValue() {
      return this.$refs.input.value;
    }
  },
};
</script>

<style scoped>
@import url("../../css/base/base-input.css");
</style>