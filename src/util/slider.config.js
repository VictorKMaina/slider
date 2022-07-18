import { reactive, ref, watch } from "vue";

// Utility Functions
export const getElementPosition = (element) => {
    let { offsetTop, offsetLeft } = element
    return { top: offsetTop, left: offsetLeft }
}

export const convert = (val, oldMin = 0, oldMax = sliderHeight.value, newMin = 0, newMax = 127) => {
    let oldRange = (oldMax - oldMin)
    let newRange = (newMax - newMin)
    return Math.round((((val - oldMin) * newRange) / oldRange) + newMin)
}

// Options to be modified
const value = ref(Number)
const minValue = ref(Number)
const maxValue = ref(Number)
const sliderHeight = ref(400)
const barStyle = ref({})
const handleStyle = ref({ marginBottom: '-20px' })
const inputStyle = ref({})

const state = reactive({
    //Options
    value, minValue, maxValue, sliderHeight, barStyle, handleStyle, inputStyle,

    // Not to be modified manually
    handlePosition: Number,
    barPosition: Number,
    hold: false,

    // State methods
    moveHandle(mousePosition, watchOn = true) {
        let handlePosition = ref(Number);

        const update = (mousePosition) => {
            let mouseY = mousePosition[1] // Get Y axis position
            if (mouseY <= this.sliderHeight + this.barPosition.top
                && mouseY >= this.barPosition.top
                && this.hold) {
                handlePosition.value = (mouseY - this.barPosition.top - this.sliderHeight) * -1
            }
            
            value.value = convert(handlePosition.value)
            console.log(value.value)
        }

        if (watchOn) watch(mousePosition, update)
        else update(mousePosition)

        return handlePosition;
    }


})

export default state