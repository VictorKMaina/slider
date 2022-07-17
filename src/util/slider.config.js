import { reactive, ref } from "vue";

export default reactive({
    // These options can be modified.
    value: Number,
    minValue: Number,
    maxValue: Number,
    sliderHeight: 400,
    barStyle: {},
    handleStyle: {},
    inputStyle: {},

    changeOption(optionName, value) {
        // Modify an option
        this[`${option}`] = value
    }
})