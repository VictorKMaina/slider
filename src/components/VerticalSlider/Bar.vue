<template>
    <!-- Bar style to be passed here from options -->
    <div :style="{}" class="bar">
        <handle-vue></handle-vue>
    </div>
</template>

<script setup>
import HandleVue from "./Handle.vue";
</script>

<style lang="scss" scoped>
div.bar {
    height: 400px;
    width: 20px;
    background-color: #efefef;
    border: 1px solid #dfdfdf;
    border-radius: 50px;
    position: relative;
    display: flex;
    justify-content: center;
}
</style>
