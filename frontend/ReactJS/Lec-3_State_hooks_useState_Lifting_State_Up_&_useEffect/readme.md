# what is state in react?

- A state is built-in object in react that holds the component data.
- A component state can change over time; but whenver your either state or props is getting changed then comopnent must re-render.
- To manage states in FBC, we ustilise the power of useState() hook.

# what is hook?

- A hook in react is special kind of function that allows in functional components to utilize the features like state and life cycle methods.

- There are 2 kinds of hooks:

  1.  built-in hooks: pre-defined hooks via react people. (useState, useEffect, useMemo, useCallback, useRef etc).

  2.  custom hook: you can build your own hooks for achiving some customise functionality or features.

- hooks always starts with a prefix by the name as "use". Always use hooks inside the functionl components.

# about useState() hook:

- this hooks add the state in functional component and whenever you are making the updation in states variable or updating the props via state then component must re-render to update the UI itself.

- syntax:

  useState(intialValue);

  but it returns an array of 2 elements:

  state varaiable and a update function to update the state

- How to use the useState and hook and what does its return?
  const [stateVariable, setStateFunctionName] = useState(intialValue);

- How handle the events in react?

  1.  we use inline events like HTML (but always give evenst name in camel casing).

  2.  Use Functions as event handlers.

  3.  In react we use sythetic events: these are browser compatible and follows same standards acrross all the browser

Mouse events:

onClick
onDoubleClick
onMouseOver
onMouseOut

Form Events:

onSubmit
onChange

- Form handling in react

- controlled vs uncontrolled component

  - controlled comp: when form data is managed by react state.
  - uncontrolled comp: When form data is managed by the DOM itself.
