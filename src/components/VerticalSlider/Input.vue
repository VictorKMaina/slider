<template>
    <input class="value" :style="state.inputStyle" type="number" :min="state.minValue" :max="state.maxValue" @input="onInput" :value="state.value" />
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useMouse } from "../../util/mouse";
import state from "../../util/slider.config";
import { convert } from "../../util/slider.config";

function onInput(event) {
    let value = parseInt(event.target.value);

    if(!value || value < state.minValue) value = state.minValue
    else if(value > state.maxValue) value = state.maxValue
    
    state.value = value;
}
</script>
