
# React Accordion Component

A simple and reusable accordion component built with **React** and **TailwindCSS**. It toggles content open and closed when clicked, with clean animations and responsive design.

---

## How to Use

### 1. Add the Component to Your Project

Create a file called `Accordion.jsx` and paste the component code into it.

---

### 2. Import the Component

In any file where you want to use the accordion, import it like this:

```jsx
import Accordion from './Accordion';
```

If it's inside a folder (like `components`), adjust the path accordingly:

```jsx
import Accordion from './components/Accordion';
```

---

### 3. Use It in Your JSX

You can pass a title and the content you want to toggle:

```jsx
<Accordion title="What is React?">
  <p>React is a JavaScript library for building user interfaces.</p>
</Accordion>
```

---

### 4. (Optional) Use External Data for Dynamic Accordions

Instead of hardcoding each accordion, you can store the content in a separate file and loop through it.

**Step-by-step:**

1. Create a file (e.g. `content.js`) with your accordion data

2. Import it and use `.map()` to render multiple accordions in your main file (like `App.jsx`):

```jsx
import Accordion from './components/Accordion';
import AccordionData from './assets/content';

{AccordionData.map((item, index) => (
  <Accordion title={item.title} key={index}>
    {item.content}
  </Accordion>
))}
```

---

### 5. Make Sure TailwindCSS Is Installed

This component uses TailwindCSS classes. If you're not using Tailwind yet, follow the guide here:

👉 [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

---

## Notes

* `+` icon indicates a closed accordion; `-` shows when it's open.
* Title is centered and clickable.
* Content slides in and out smoothly using Tailwind’s transition classes.
* Fully reusable with any type of content inside.

---

This component is designed to be simple, clean, and ready to drop into your project. Feel free to customize it!
