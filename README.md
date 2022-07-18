# Vue Slider

## Introduction

Vue Slider is a simple component library built for ```Vue3```. It works well on both desktop and mobile devices. At the moment, it only offers a vertical slider. Other kinds of controls like horizontal sliders and dial knobs are in development.


## Creating a Vue App

To use this component, you will need an existing Vue project. We can easily create one using `npm` and `vite`.

```bash
npm init vue@latest
```

Follow the instruction to set up your projects configuration. For other ways to create a Vue project, refer to the [Vue documentation](https://vuejs.org/guide/quick-start.html).

## Installation

Now that you have an existing project, you can install Vue Slider using [npm](https://www.npmjs.com/package/@victormainak/vue-slider).

```bash
npm install @victormainak/vue-slider
```

### Registering the component globally

There are two ways to register Vue components - globally or locally in an SFC. To register Vue Slider globally, you need to import it into `main.js`.

```js
import { createApp } from "vue";
import App from "./App.vue";
import { VerticalSlider } from "@victormainak/slider";

const app = createApp(App);

app.component("VerticalSlider", VerticalSlider); // Registering the component globally

app.mount("#app");
```

This allows you to access the slider in other components throughout your app.

```html
<template>
    <VerticalSlider />
</template>
```

### Registering the component locally

You can also register components locally in an SFC. To do this with the `VerticalSlider`, import it in your desired component.

```html
<script setup>
    import { VerticalSlider } from "@victormainak/slider";
</script>

<template>
    <VerticalSlider />
</template>
```

## Usage

Vue Slider has a number of options to change its behavior and appearance which are passed to the component as props.

```html
<template>
    <VerticalSlider :value="50" />
</template>

<script setup>
    import { VerticalSlider } from "@victormainak/slider";
</script>
```

Here are other options that can be passed.

| Option       | Type   |
| ------------ | ------ |
| value        | Number |
| minValue     | Number |
| maxValue     | Number |
| sliderHeight | Number |
| barStyle     | Object |
| handleStyle  | Object |
| inputStyle   | Object |

### Accessing the value

The slider's numerical value is emitted is an event which can be accessed on the component instance.

```html
<template>
    <VerticalSlider @value="value = $event" />
</template>

<script setup>
    import { VerticalSlider } from "@victormainak/slider";
    const value = 0; // Updates to slider's value
</script>
```

---

## Conclusion
If you would like to contribute more to this project, you can fork the repository and make a pull request. You can also [email me](mailto:contact@victormaina.com) if you have any questions or concerns. If you like this project, please leave a star.