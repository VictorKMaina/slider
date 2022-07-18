// Utility Functions
export const getElementPosition = (element) => {
    let { offsetTop, offsetLeft } = element
    return { top: offsetTop, left: offsetLeft }
}

export const convert = (oldVal, newMin, newMax, oldMin, oldMax) => {
    let oldRange = (oldMax - oldMin)
    let newRange = (newMax - newMin)
    return Math.round((((oldVal - oldMin) * newRange) / oldRange) + newMin)
}