<template>
    <div
        ref="handle"
        :style="{
            bottom: handlePosition + 'px',
            ...state.handleStyle
        }"
        class="handle"
    ></div>
</template>

<script setup>
import { computed, inject } from "vue";
import { convert } from "./utility";

const state = inject("state");

const handlePosition = computed(() => {
    let position = convert(
        state.value,
        0,
        state.sliderHeight,
        state.minValue,
        state.maxValue
    );
    return position;
});
</script>
