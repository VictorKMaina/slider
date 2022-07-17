<template>
    <!-- Bar style to be passed here from options -->
    <div :style="{ height: sliderHeight + 'px', ...barStyle }" class="bar">
        <handle-vue></handle-vue>
    </div>
</template>

<script setup>
import HandleVue from "./Handle.vue";
import sliderConfig from "../../util/slider.config";

const { sliderHeight, barStyle } = sliderConfig;
</script>
