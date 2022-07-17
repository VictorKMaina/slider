<template>
<div :style="{ bottom: `${position[1]}px` }" class="handle"></div>
</template>

<script setup>
import { useMouse } from '../../util/mouse';

let { position } = useMouse()
</script>