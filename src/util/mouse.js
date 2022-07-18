import { onMounted, onUnmounted, ref } from "vue";

export function useMouse(event, onMount = true) {
    const mouse = {
        position: ref([0, 0]),
    }

    function updatePosition(event) {
        let mouseX = event.pageX
        let mouseY = event.pageY
        mouse.position.value = [mouseX, mouseY]
    }

    if (onMount) {
        onMounted(() => window.addEventListener('mousemove', updatePosition))
        onUnmounted(() => window.removeEventListener('mousemove', updatePosition))
    } else updatePosition(event)

    return mouse
}