# Template of React UI Libraries

## NEXTUI LIBRARY TEMPLATE

### Installation

`install next ui`

```
npm i @nextui-org/react framer-motion
```

`install tailwind css`

```
npm install -D tailwindcss
npx tailwindcss init
```

copy paste below code in `tailwind.config.js`

```
/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
  "./src/**/**/*.{html,js,jsx,ts,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}
```

add code in `index.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

run code in terminal

```
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

`src/index.html`

```
<link href="/dist/output.css" rel="stylesheet">
```

add the following to the `index.js`

```
import {NextUIProvider} from '@nextui-org/react
<NextUIProvider>
<App/>
</NextUIProvider>
```

### Guide to use NextUI library in your project

1. go to `components/nextui.js` and access the components
