import { onMounted, onUnmounted, ref } from "vue";

export function useMouse(event, onMount = true) {
    const mouse = {
        position: ref([0, 0]),
    }

    function updatePosition(event) {
        if (event.type == 'touchmove') event = event.touches[0]
        let mouseX = event.pageX
        let mouseY = event.pageY
        mouse.position.value = [mouseX, mouseY]
    }

    if (onMount) {
        onMounted(() => {
            window.addEventListener('mousemove', updatePosition)
            window.addEventListener('touchmove', updatePosition)
        })
        onUnmounted(() => {
            window.removeEventListener('mousemove', updatePosition)
            window.removeEventListener('touchmove', updatePosition)
        })
    } else updatePosition(event)

    return mouse
}