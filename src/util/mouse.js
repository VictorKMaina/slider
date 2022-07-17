import { onMounted, onUnmounted, ref } from "vue";

export function useMouse() {

    let mouse = {
        position: ref([0, 0]),
    }

    function updatePosition(event) {
        let mouseX = event.pageX
        let mouseY = event.pageY
        mouse.position.value = [mouseX, mouseY]
    }

    onMounted(() => window.addEventListener('mousemove', updatePosition))
    onUnmounted(() => window.removeEventListener('mousemove', updatePosition))

    return mouse
}