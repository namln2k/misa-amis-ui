<template>
    <div class="field">
        <div class="label">
            {{ label }}
            <span v-if="required" style="color: red; font-weight: 400;">*</span>
        </div>
        <input type="date" class="text-input">
    </div>
</template>

<script>
export default {
    name: "BaseTextInput",
    props: {
        label: {
            type: String,
            required: true
        },
        required: {
            type: Boolean,
            required: false,
            default: false
        },
        content: {
            type: String,
            required: false,
            default: ""
        }
    }
}
</script>

<style scoped>
@import url("../../css/base/base-input.css");
</style>