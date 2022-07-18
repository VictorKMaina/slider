<template>
    <bar-vue></bar-vue>
    <input-vue></input-vue>
</template>

<script setup>
import state from "../../util/slider.config";
import BarVue from "./Bar.vue";
import InputVue from "./Input.vue";
import { computed, onMounted, watch } from "vue";

const props = defineProps({
    value: Number,
    minValue: Number,
    maxValue: Number,
    sliderHeight: Number,
    barStyle: {},
    handleStyle: {},
    inputStyle: {}
});

const newState = state.update(props)

// Emit value of slider
const emit = defineEmits(["changeValue", "somethingElse"]);
emit("changeValue", state.value);
watch(
    () => state.value,
    (value) => emit("changeValue", value)
);
</script>
