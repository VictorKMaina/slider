<template>
    <div class="slider-container">
        <vertical-slider-vue></vertical-slider-vue>
        <p>Mouse Position: {{ position }}</p>
    </div>
</template>

<script setup>
import VerticalSliderVue from "./components/VerticalSlider/Slider.vue";

import { useMouse } from "./util/mouse"

let { position } = useMouse()

</script>
