<template>
<div ref="handle" :style="{
    bottom: state.handlePosition+'px',
    ...state.handleStyle
}" class="handle"></div>
</template>

<script setup>
import { useMouse } from '../../util/mouse';
import state from '../../util/slider.config';

state.handlePosition = state.moveHandle(useMouse().position)

</script>