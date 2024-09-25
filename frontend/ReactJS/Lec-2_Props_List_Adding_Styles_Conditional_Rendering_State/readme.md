# Quick Recap:

- What is React and What does it do?

  - just a frontend or a UI JS library
  - helps to build any UI or a complex UI or you can update the DOM easily and efficiently.
  - provides you a component based UI
  - Manages the state(data) -> internal data of a component
  - one-way data flow -> React sends the data from parent to child.

- What is component? types of components?

  - independent and reusable piece of code.
  - just like JS normal or arrow functions that JSX elements.
  - In React, we have 2 kind of componets:
    1.  FBC (Functional Based Components): -> use to build a component using a normal function or an arrow functions.
    2.  CBC (Class Based Components): -> use to build a component using classes, but there are some a component life cyle methods to build and render the UI. -> will later in the class.

- What is JSX? what does it do?

- it's just syntax extention of JS in react.
- JSX -> JAvascript XML.
- JSX -> JS + HTML -> devs can write HTML inside the JS.
- can be used in:

  1. functions.
  2. varaibles
  3. loops.
  4. expressions.

- What is babel? what does it do?

  - It's just JS compiler/transpiler that convets the ES6+ code into old and new browser compatible JS code.
  - In React, converts JSX code to JS code.

- What is ReactDOM and what does it do?

- renders react comps to the real DOM in your web apps.

- Build tools: provides you the complete ecosystem to build a production ready web apps.

  - webpack
  - vite
  - parcel

- Vite build:

  - prerequisite:

    - install nodeJS, npm or yarn tool
    - npm create vite@latest or yarn create vite

# what is props?

- props stands for properties.
- A way to pass data from one componet to another component.
- always pass data from parent to child.
- props are immutable so that we can't modify it.

# What is component composition in react?

- It's design pattern in react, by combining smaller and resuable components all together to a build complex UI.

# how to render the list in react? what is key prop?

- To render list of items use loops -> map() HOF.
- You will an warning , to identify the unique list items then you need to use key prop attribute in JSX elements.

# how to add styles in the react components? How many ways are there?

1. Inline styles.
2. External styles -> can use the this styles using className="abc"
3. CSS module.

# What is conditional rendering?

- allows the devs to render the UI based on certain conditions.
- ways to use conditinal rendering:
  1.  using ternary operator: ? :
  2.  using logical && operator
  3.  using if and else stmt
