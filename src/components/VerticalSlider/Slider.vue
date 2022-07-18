<template>
    <div class="slider-container">
        <h1>{{ state.title }}</h1>
        <bar-vue></bar-vue>
        <input-vue></input-vue>
    </div>
</template>

<script setup>
import BarVue from "./Bar.vue";
import InputVue from "./Input.vue";
import { watch, provide, defineProps } from "vue";
import { createState } from "./state";

const props = defineProps({
    title: String,
    desctription: String,
    mapping: String,
    value: Number,
    minValue: Number,
    maxValue: Number,
    sliderHeight: Number,
    barStyle: {},
    handleStyle: {},
    inputStyle: {}
});

const state = createState().update(props);

// Pass state down to child components
provide("state", state);

// Emit value of slider
const emit = defineEmits(["value", "somethingElse"]);
emit("value", state.value);
watch(
    () => state.value,
    (value) => emit("value", value)
);
</script>
