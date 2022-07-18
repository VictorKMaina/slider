import { computed, reactive, ref, watch } from "vue";

// Utility Functions
export const getElementPosition = (element) => {
    let { offsetTop, offsetLeft } = element
    return { top: offsetTop, left: offsetLeft }
}

export const convert = (oldVal, newMin = minValue.value, newMax = maxValue.value, oldMin = 0, oldMax = sliderHeight.value) => {
    let oldRange = (oldMax - oldMin)
    let newRange = (newMax - newMin)
    return Math.round((((oldVal - oldMin) * newRange) / oldRange) + newMin)
}


// Options to be modified
const value = ref(50)
const minValue = ref(50)
const maxValue = ref(100)
const sliderHeight = ref(400)
const barStyle = ref({})
const handleStyle = ref({ marginBottom: '-20px' })
const inputStyle = ref({})

const handlePosition = computed(() => {
    let position = convert(value.value, 0, sliderHeight.value, minValue.value, maxValue.value)
    return position;
})

const state = reactive({
    //Options
    value, minValue, maxValue, sliderHeight, barStyle, handleStyle, inputStyle,

    // Not to be modified manually
    handlePosition,
    barPosition: Number,
    hold: false,

    // Update state using props
    update(props){
        for(let prop in props){
            if(props[prop]) this[prop] = props[prop]
        }
    },

    moveHandle(position, watchOn = true) {
        const update = (position) => {
            let newPosition = (position[1] - this.barPosition.top - this.sliderHeight) * -1
            let value = convert(newPosition)
            if (value >= this.minValue && value <= this.maxValue) this.value = value
        }

        if (watchOn) watch(position, (position) => { if (this.hold) update(position) })
        else update(position.value)
    },
})

export default state