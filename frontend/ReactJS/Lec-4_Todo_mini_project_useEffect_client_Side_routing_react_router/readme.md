# Todo App:

Must to have features:

    - Show the UI/Build the UI
    - Add task
    - Delete task
    - Edit task (Assignment)

Good to have features:

- create checkbox before any task list items and on checking of checbox then strich out the particular task

- Client storage to persist the task list data.

- Lifting state up:

  moving the shared data to nearest/closest parent component so that multiple child components can get the shared data via props.

  - When to use it?

    when you want to make data communication from child to parent

  - props: When you pass data from parent to child.

- useEffect()

  - In react, useEffect() is a hook which is used to synchronise your component with external system.

  - External system means:

    - making an API call
    - Websockets or event systems
    - timers or intervals
    - 3rd party libraries(chart libaray, Axios)

  - how to use useEffect() hook?

    Syntax:

    useEffect(()=>{
    // write the logic f external system to be used
    }, []);

  - To use useEffect(), you need to understand the component lifecycle:

  1.  Mounting: When a component is initially created and render/added to the DOM.

      During Mounting phase:

      1.  A component is created.
      2.  intial state and props are intitialised
      3.  a component is rendered on th eDOM first time.

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
                  // clear internal code
                  //  remove the loader/toast
            }

      })
