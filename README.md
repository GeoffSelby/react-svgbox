# react-svgbox

> Simple React components for using the [svgbox.net](https://svgbox.net) API.

[![npm](https://img.shields.io/npm/v/react-svgbox?style=for-the-badge)](https://npm.js.com/package/react-svgbox)
![Travis (.com)](https://img.shields.io/travis/com/GeoffSelby/react-svgbox?style=for-the-badge)

# Documentation

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Components](#components)
  - [Icon (default)](#icon-default)
    - [Usage](#usage)
    - [Props](#props)
  - [Social](#social)
    - [Usage](#usage-1)
    - [Props](#props-1)
  - [MaterialUi](#materialui)
    - [Usage](#usage-2)
    - [Props](#props-2)
  - [Heroicons (Outline)](#heroicons-outline)
    - [Usage](#usage-3)
    - [Props](#props-3)
  - [Heroicons (Solid)](#heroicons-solid)
    - [Usage](#usage-4)
    - [Props](#props-4)
  - [Loading Animations](#loading-animations)
    - [Usage](#usage-5)
    - [Props](#props-5)
  - [Flags](#flags)
    - [Usage](#usage-6)
      - [Low Def Flag](#low-def-flag)
      - [High Def Flag](#high-def-flag)
    - [Props](#props-6)
  - [Pattern Backgrounds](#pattern-backgrounds)
    - [Usage](#usage-7)
    - [Props](#props-7)
- [Specifying Fill Color](#specifying-fill-color)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```bash
yarn add react-svgbox
```

## Basic Usage

```jsx
import React, { Component } from 'react'

import Icon from 'react-svgbox'

class Example extends Component {
  render() {
    return (
      <Icon
        className='example'
        fillColor='000000'
        iconSet='loaders'
        icon='three-dots'
      />
    )
  }
}
```

## Components

### Icon (default)

The `Icon` component is the "catch all" component for the main icon sets.

#### Usage

```jsx
import React, { Component } from 'react'

import Icon from 'react-svgbox'

class Example extends Component {
  render() {
    return (
      <Icon
        className='example'
        fillColor='000000'
        iconSet='loaders'
        icon='three-dots'
      />
    )
  }
}
```

#### Props

| Prop      | Description                                                                                                    |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| className | Any additional classes you want to add.                                                                        |
| iconSet   | The icon set you want to use. Options are `social`, `materialui`, `hero-solid`, `hero-outline`, and `loaders`. |
| icon      | The name of the icon you want to render.                                                                       |
| fillColor | The color you want the icon to be. Fill color can be in [multiple formats](#specifying-fill-color).            |

### Social

The `Social` component can be used to render icons from the [Social, Web, and Apps](https://svgbox.net/icon-set/social) icon set.

#### Usage

```jsx
import React, { Component } from 'react'

import { Social } from 'react-svgbox'

class Example extends Component {
  render() {
    return <Social className='example' fillColor='000000' icon='airbnb' />
  }
}
```

#### Props

| Prop      | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| className | Any additional classes you want to add.                                                             |
| icon      | The name of the icon you want to render.                                                            |
| fillColor | The color you want the icon to be. Fill color can be in [multiple formats](#specifying-fill-color). |

### MaterialUi

The `MaterialUi` component can be used to render icons from the [Material UI](https://svgbox.net/icon-set/materialui) icon set.

#### Usage

```jsx
import React, { Component } from 'react'

import { MaterialUi } from 'react-svgbox'

class Example extends Component {
  render() {
    return <MaterialUi className='example' fillColor='000000' icon='bolt' />
  }
}
```

#### Props

| Prop      | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| className | Any additional classes you want to add.                                                             |
| icon      | The name of the icon you want to render.                                                            |
| fillColor | The color you want the icon to be. Fill color can be in [multiple formats](#specifying-fill-color). |

### Heroicons (Outline)

The `HeroOutline` component can be used to render icons from the [Heroicons (Outline)](https://svgbox.net/icon-set/hero-outline) icon set.

#### Usage

```jsx
import React, { Component } from 'react'

import { HeroOutline } from 'react-svgbox'

class Example extends Component {
  render() {
    return <HeroOutline className='example' fillColor='000000' icon='archive' />
  }
}
```

#### Props

| Prop      | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| className | Any additional classes you want to add.                                                             |
| icon      | The name of the icon you want to render.                                                            |
| fillColor | The color you want the icon to be. Fill color can be in [multiple formats](#specifying-fill-color). |

### Heroicons (Solid)

The `HeroSolid` component can be used to render icons from the [Heroicons (Solid)](https://svgbox.net/icon-set/hero-solid) icon set.

#### Usage

```jsx
import React, { Component } from 'react'

import { HeroSolid } from 'react-svgbox'

class Example extends Component {
  render() {
    return <HeroSolid className='example' fillColor='000000' icon='user-add' />
  }
}
```

#### Props

| Prop      | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| className | Any additional classes you want to add.                                                             |
| icon      | The name of the icon you want to render.                                                            |
| fillColor | The color you want the icon to be. Fill color can be in [multiple formats](#specifying-fill-color). |

### Loading Animations

The `Loader` component can be used to render icons from the [Loading Animations](https://svgbox.net/icon-set/loaders) icon set.

#### Usage

```jsx
import React, { Component } from 'react'

import { Loader } from 'react-svgbox'

class Example extends Component {
  render() {
    return <Loader className='example' fillColor='000000' icon='three-dots' />
  }
}
```

#### Props

| Prop      | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| className | Any additional classes you want to add.                                                             |
| icon      | The name of the icon you want to render.                                                            |
| fillColor | The color you want the icon to be. Fill color can be in [multiple formats](#specifying-fill-color). |

### Flags

The `Flag` component can be used to render icons from the [Flags (Low Def)](https://svgbox.net/icon-set/flags-ld) and [Flags (High Def)](https://svgbox.net/icon-set/flags-hd) icon sets.

#### Usage

##### Low Def Flag

```jsx
import React, { Component } from 'react'

import { Flag } from 'react-svgbox'

class Example extends Component {
  render() {
    return <Flag flag='us' quality='low' />
  }
}
```

##### High Def Flag

```jsx
import React, { Component } from 'react'

import { Flag } from 'react-svgbox'

class Example extends Component {
  render() {
    return <Flag flag='us' quality='high' />
  }
}
```

#### Props

| Prop    | Description                                                                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| flag    | The flag icon you want to render.                                                                                                                       |
| quality | The quality of the flag icon you want to render. Value can be `low` for low def or `high` for high def. If no quality is provided, `high` will be used. |

### Pattern Backgrounds

The `Pattern` component can be used to render background patterns from the [Pattern Backgrounds](https://svgbox.net/icon-set/heropatterns) icon set.

#### Usage

```jsx
import React, { Component } from 'react'

import { Pattern } from 'react-svgbox'

class Example extends Component {
  render() {
    return (
      <Pattern
        className='example-class'
        pattern='4-point-stars'
        fillColor='purple-600'
        bgColor='#fff'
        bgSize='32px'
      >
        <h1>Hello World</h1>
      </Pattern>
    )
  }
}
```

#### Props

| Prop      | Description                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------- |
| className | Any additional classes you want to add.                                                                   |
| pattern   | The name of the pattern you want to render.                                                               |
| fillColor | The color you want the icon to be. Fill color can be in [multiple formats](#specifying-fill-color).       |
| bgColor   | The background color of the wrapping `div` that is rendered. The value can be any valid CSS color format. |
| bgSize    | The size of the pattern icon used to create the pattern background.                                       |

## Specifying Fill Color

Most components accept a `fillColor` prop for specifying the fill color of the icon/pattern. This prop supports multiple formats:

- **Hex Format**: f50a0a
- **RGB Format**: rgb(41,152,0)
- **HSL Format**: hsl(14,100%,30%)
- **[Tailwind Colors](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)**: purple-600
- **HTML5 Common Colors**: violet

## License

MIT © [GeoffSelby](https://github.com/GeoffSelby)
