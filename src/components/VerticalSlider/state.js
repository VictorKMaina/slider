import { watch, reactive, ref } from "vue";
import { convert } from "./utility";

export const createState = () => {
    return reactive({
        title: ref(""),
        desctription: ref(""),
        mapping: ref(""),
        value: ref(0),
        minValue: ref(0),
        maxValue: ref(127),
        sliderHeight: ref(400),
        barStyle: ref({}),
        handleStyle: ref({ marginBottom: "-20px" }),
        inputStyle: ref({}),

        update(props) {
            for (let prop in props) {
                let newValue = props[prop]
                if (newValue !== undefined) {
                    this[prop] = newValue
                }
            }
            return this
        },

        moveHandle(mousePosition, watchOn = true) {
            const update = (mousePosition) => {
                let newMousePosition = (mousePosition[1] - this.barPosition.top - this.sliderHeight) * -1;

                let value = convert(newMousePosition, this.minValue, this.maxValue, 0, this.sliderHeight);

                if (value >= this.minValue && value <= this.maxValue)
                    this.value = value;
            };

            if (watchOn) {
                watch(mousePosition, (mousePosition) => {
                    if (this.hold) update(mousePosition);
                });
            }
            else update(mousePosition.value);
        }
    })
}