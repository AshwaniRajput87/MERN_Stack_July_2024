# useEffect() and its use cases:

- In react, useEffect() is a hook which is used to synchronise your component with external system.

- External system means:

  - making an API call
  - Websockets or event systems
  - timers or intervals
  - 3rd party libraries(chart libaray, Axios)

- how to use useEffect() hook?

  Syntax:

  useEffect(()=>{
  // write the logic of external system to be used
  }, []);

- To use useEffect(), you need to understand the component lifecycle:

1.  Mounting: When a component is initially created and render/added to the DOM.

    During Mounting phase:

    1.  A component is created.
    2.  initial state and props are intitialised
    3.  a component is rendered on the DOM first time.

    useEffect(()=>{
    Mounting: can write the code when the components get mounted.
    }, []); -> useEffect() will call once duw it empty array.

2.  updating:

    When a comp's state or props are changing the it triggeres the re-rndering.

    useEffect(()=>{
    // updating pahse, useEffect is going to re-triggering
    }, [dependency var-1, dependency var-2,...])

    The useEffect() hook re-runs when its dependencies change.

    During updating phase:

    1. Changes in state or props trigger re-renders.
    2. The function of the component is triggered once more.
    3. Updated JSX is rendered to reflect the changes.

3.  Unmounting:

    When the component is removing from DOM, this is called as unmounting phase.

    useEffect(()=>{

    return () =>{
    // do your clean up activity code
    // clear interval code
    // remove the loader/toast
    }

    })

# Rules of hooks:

1.  Call hooks at the top level.

2.  hooks will always call inside the functional components

3.  Use the hooks in the same that you defined.

4.  Custom hooks will follow the same rules like built-in hooks.

    const useFetchData = (url) =>{
    return data;
    }

# client-side routing or frontend routing:

- For intuition to use client side routing: refer the notes

# Understanding of react Router and its setup:

- What is react router?

  - A library for react apps that helps to build multi=pate web apps without reloading the entire web page that allows the seamless user experience.

  - to setup you need - react-router-dom to install via npm or yarn

    - npm i react-router-dom or yad add react-router-dom

  - <BrowserRouter> - This is component to set up muti page web apps
    <Routes> - this is component to define multiple routes
    <Route > - this is the component to path and element to render on the browser - path and element as props
    <Link> - This is also component to link the route path with navigation bar items
    <Navigate> - This is also a component to navigate on the path that yopu define.

    Dynamic routing: you provide the vralbles i the url :classId and ablue use to read these dynamic urls values using useParams() - hook.

  - nested routes - post read
    - https://reactrouter.com/en/main/hooks/use-params
