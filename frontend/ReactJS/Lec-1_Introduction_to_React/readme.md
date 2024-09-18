 <!-- React is a ui manipulation(logic)library -->
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin></script>

<!-- react dom -> To get the actual changes in the DOM with the help of react DOM library  -->
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin></script>

<!-- to convert jsx to js  -->
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>

Prerequisite for React:

1. HTML
2. CSS
3. JS (let, const, arrow function, class, async programming, promises, loops, HOF(map, filter, reduce))

# Why should you learn React?

    - High Demand in the market

    - Easy to learn as compared to AngularJS


    - Complex DOM manipulation makes easier

    - Spaghetti code(means the code that is complex and tangled and difficult to maintain) - React reduces the redudant code and make your web more faster and web performant.

    - Performance issues - React will be the performance issues - make the code re-usable and uses the concept of Virtual DOM

    - It provides the scalability to the web apps.

# what is React?

  - React is a frontend JS library developed by facebook in 2011.
  - It's an open source JS library with strong community support.
  - You can build any sort of complex web apps.

# is React a JS library or framework?

   - JS library

# what is the difference b/w a librart and framework?

    - Library:
     - used to perform a common task(s) with pre-written code.
     - provides the flexibility when to use in your applications.

    - Framework: 
        - A ready-made structure and a toolkit that helps you to build the apps.
        - Provides a structure and flow of your application based floowing the certain patterns.


# Who in vented the React JS Library?

  - Cretaed by Jordan Walke, a sofware engineer worked facebook.
  - It was first deployed in facebook news feed in 2011.
  - Later on Instagram in 2012 they made it open-sourced.

  - CDN links to build and use React based UIs: https://legacy.reactjs.org/docs/cdn-links.html


# Setting up the Dev env for buidling the React apps using CDN.

<!-- React is a ui manipulation(logic)library -->
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin></script>

<!-- react dom -> To get the actual changes in the DOM with the help of react DOM library  -->
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin></script>

<!-- to convert jsx to js  -->
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>


# What is component?

 - An independent and reusable piece of code.

 - They are pretty similar to the JS function, but work independently and return JSX elements. 


# what is JSX elements?

 - JSX stands for Javscript XML

 - JSX = Javascript embeds the HTML.

 - const element = <h1> Hello, Ashwani Rajput </h1>;

# Whare can you use JSX?

 - Functions.
 - Conditional rendering.
 - variables.
 - Loops (map)
 - Event handlers 
 - Expressions.

 # why use JSX?

 - JSX is faster then regular JS due to Optimisations during the transalation to JS objects.
 - Combines the markup and logic in a single component.
 - Makes esier to create templates.
 - But these JSX elsmenst are not going understand by the browsers.

 # What is Babel? What does it do?

-  Babel is JS transpiler or compiler.
- Basicall it converts the ES6+ code and JSX into backward compatible JS code so that that can work for all the modern  and old browsers.


# What is ReactDOM? What does it do?

- ReactDOM is a react libarary for rendering the components in the real DOM and efficiently updating when the data changes.
- It ensures that the UI is in sync with entire application state.

# React build tool

  - can't solely depending on CDN(Content Delivery Network) for React development, so you need a build to develop react components fastly.

  - Majorly used build tools are:

    1. Webpack
    2. Vite
    3. Parcel

1. Webpack:

   -  CRA: to help you create react application quickly.
   -  npx create-react-app app name
   -  Pros: beginner-friendly because it will set up everything you.
   -  Cons: Webpack can slow down for the larger projects. Customizing the the default set up will be challenging. 


2. Vite:

  - Vite is a fast and efficient tool for building th react apps
  - It help you to set the react app with minimal configurations and natively support the ES module.
  - PROS: it is very help for building small or comples web apps with minimal configurations.
  - CONS: Vite is new tool and takes some time to learn and explore about this tool. but some resources or libraries are the not upto the speed yet. Now-a-days Vite is getting used huge and gaining more popularity
  - npm create vite@latest
  - https://vitejs.dev/guide/ 

3. Parcel:

  - It's a bundler tool for JavaScript apps.
  - Pracel basically bundles (HTML, CSS and JS) together into a smaller file size.
  - PROS: require the zero or minimal configuration set up. these are also very fast to create apps
  - CONS: It does not have fearture-rich configuration like webpack and vite are having.

  We are going to use vite tool to build the react apps.

# Lets build react using build tool.
npm create vite@latest

yarn create vite