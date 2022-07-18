<template>
    <!-- Bar style to be passed here from options -->
    <div
        @mousedown="state.hold = true"
        :style="{ height: state.sliderHeight + 'px' }"
        class="bar"
        ref="bar"
    >
        <handle-vue></handle-vue>
    </div>
</template>

<script setup>
import HandleVue from "./Handle.vue";
import state from "../../util/slider.config";
import { getElementPosition } from "../../util/slider.config";
import { ref, onMounted } from "vue";
import { useMouse } from "../../util/mouse";

// Get y position of bar
const bar = ref(null); // Select bar element from DOM
onMounted(() => {
    state.barPosition = getElementPosition(bar.value);
});
</script>
