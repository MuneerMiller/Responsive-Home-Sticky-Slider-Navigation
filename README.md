# Sticky Slider Navigation

A responsive sticky slider navigation bar that highlights the active tab as you scroll through different sections. This project demonstrates a smooth navigation experience with dynamic styling using HTML, CSS, and JavaScript.

**[▶ View the live demo](https://muneermiller.github.io/Responsive-Home-Sticky-Slider-Navigation/)**

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Accessibility](#accessibility)
- [Credits](#credits)
- [Licence](#licence)

---

## Features

- **Sticky Navigation Bar**: The navigation bar sticks to the top of the viewport when scrolling.
- **Smooth Scrolling**: Clicking a tab scrolls smoothly to the corresponding section.
- **Dynamic Active Tab Highlight**: Highlights the active tab with a slider animation.
- **Responsive Design**: Fully functional across different screen sizes.
- **Lightweight Dependencies**: Uses jQuery for DOM manipulation.
- **Shareable Links**: Clicking a tab updates the address bar, and opening a link to a section sets the bar and indicator straight away.

---

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling for the navigation bar, sections, and slider.
- **JavaScript**: Controls the sticky behavior, smooth scrolling, and tab highlighting.
- **jQuery**: Simplifies DOM manipulation and event handling.

---

## File Structure

```bash
.
├── index.html          # Main HTML file
├── assets/
│   ├── styles/
│   │   └── style.css   # CSS for styling
│   ├── scripts/
│       └── script.js   # JavaScript for navigation functionality
```


---

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MuneerMiller/Responsive-Home-Sticky-Slider-Navigation.git
   ```

2. Open `index.html` in your browser. There is nothing to install or build.

### Usage

Scroll down the page and the navigation bar sticks to the top, with the slider following the section you are in. Click a tab to scroll smoothly to its section.

Or skip the setup and open the [live demo](https://muneermiller.github.io/Responsive-Home-Sticky-Slider-Navigation/).

---

## Accessibility

- The tabs sit in a `<nav>` landmark, and the tab for the section on screen is marked with `aria-current`, so screen readers announce where you are.
- Tabs show a clear focus outline when you move through them with the keyboard.
- Smooth scrolling and the sliding indicator are switched off for people who prefer reduced motion.

---

## Credits

Based on the [Sticky Slider Nav](https://codepen.io/ettrics) pen by **Ettrics** on CodePen. I rebuilt it as a standalone project and added the accessibility, reduced-motion and shareable-link improvements above.

---

## Licence

MIT, like the original CodePen. See [LICENSE](LICENSE).
