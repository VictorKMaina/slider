<template>
    <bar-vue></bar-vue>
    <input-vue></input-vue>
</template>

<script setup>
import state from "../../util/slider.config";
import BarVue from "./Bar.vue";
import InputVue from "./Input.vue";

// Stop moving handle globally
window.addEventListener('mouseup',() => state.hold = false)
</script>