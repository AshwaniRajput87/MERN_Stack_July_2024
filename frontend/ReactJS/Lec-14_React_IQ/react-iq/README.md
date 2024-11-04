# Class based components:

In react you can build 2 kinds of components:

    1. Functional Components
    2. Class based components

Stages of react component:

    1. mounting: creation
    2. updation
    3. unmount: deletion

Class Component:

    - are defined with ES6 class
    - They have a set of liycycle methods that allow ro control and manage the behavior of the components.

    - initial state is defined inside the constructor
    - you are this keyword which will be avaiable inside the lifecycle methods
    - this.setState() method to update the states

    Lifecycle methods - > Class based components

    -> constructor: use to define varaibles/states
    -> render: render the output
    -> componentDidMount(): runs only once after first render
        - It's part of class based components only not FC
        - useEffect(cb, []);
    -> componentDidUpdate():  run only when there is chnage in state or props
        - FC: useEffect(cb, [dep1, dep2,...]);

    -> If you want to unmount your component or delete your comp from browser

       CBC -> componentWillUnmount()
       FBC -> useEffect(cb, []) -> return(){
        write the logic for clearing loader, clearing clear internal, closing the files,
       }

# What is HOC (Higher Order Component)?

- It's pattern where a function takes a component and returns a new component with some additional Functionality.

- HOC is a way to reuse the components logic, share the code b/w the components.

# What is the purpose of react you have learnt so far?

- To build and update the UI for any web, mobile(Native React) or desktop(electronJS) apps with efficient rendering and follow component based architecture.

# What is VDOM (Virtual DOM) and How does it work?

- VDOM:

  - In-memory representation of the real DOM
  - This is presentation of UI which is kept in a memory and later at some point in time sync with react DOM (react-dom lib is used to sync VDOM to Real DOM).

- How it works?

  1. Initial Rendering:

     - When we create a react component and try to mount that component then it creates a VDOM tree.
     - VDOM tree is rendered and sync with real DOM.

  2. Component Updates:

     - When a state or props or both changes ina component, the react components are getting re-rendered.

     - Indtead of directly making the chnages in real DOM, first it creates VDOM and then apply those chnages in VDOM only.

  3. Reconcilaition process: (Diffing Algorithm) O(n)

     - Then, it compares the new DOM with previous DOM , this is known reconcialition process.

     - Ref: https://legacy.reactjs.org/docs/reconciliation.html

  4. Minimimizing DOM updates:

     - Only the differences b/w the new VDOM and previous VDOM are getting applied in Real DOM/Actual DOM.

- Couple of more questions can be asked:

  1. React perf - Refer the last 2 sessions

     - useRef()
     - Memoisation:

       - useMemo()
       - useCallback()
       - React.memo()

     - code splitting

     - lazy loading - lazy() and Suspense

  2. What is hook? what are the built in hooks

     useSate()
     useEffect()

  3. What is custom hook? Can you implement?

  4. Prep the Machine coding questions.
