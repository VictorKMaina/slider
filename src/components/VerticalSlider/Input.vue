<template>
    <input
        class="value"
        :style="state.inputStyle"
        type="number"
        :min="state.minValue"
        :max="state.maxValue"
        @input="onInput"
        :value="state.value"
    />
</template>

<script setup>
import { inject } from "vue";

const state = inject("state");

function onInput(event) {
    let value = parseInt(event.target.value);

    if (!value || value < state.minValue) value = state.minValue;
    else if (value > state.maxValue) value = state.maxValue;

    state.value = value;
}
</script>
