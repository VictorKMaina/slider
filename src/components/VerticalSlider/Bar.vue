<template>
    <!-- Bar style to be passed here from options -->
    <div
        @mousedown="onMouseDown"
        @touchstart="onMouseDown"
        @click="onClick"
        :style="{ height: state.sliderHeight + 'px', ...state.barStyle }"
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

// Change value based on mouse position to move handle
const { position } = useMouse();

// Event handlers
function onMouseDown(){
    state.hold = true
    state.moveHandle(position)

    window.addEventListener('mouseup', () => state.hold = false)
    window.addEventListener('touchend', () => state.hold = false)
}

function onClick(){
    state.moveHandle(position, false)
}

// Get y position of bar
const bar = ref(null); // Select bar element from DOM
onMounted(() => {
    state.barPosition = getElementPosition(bar.value);
});
</script>
