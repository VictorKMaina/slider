<template>
    <div class="slider-container">
        <vertical-slider-vue v-bind="data"></vertical-slider-vue>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import VerticalSliderVue from "./components/VerticalSlider/Slider.vue";
</script>