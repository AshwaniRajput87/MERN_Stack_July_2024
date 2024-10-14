# Why Redux?

1.  When your app's state managment is complex.
2.  predictable chnanges:
    - Gives you a clear step to update your.
3.  Centralised store:

    - Your entire app data is stored at single place, which would be easiser to access that data.
    - Refer the notes for diagram

4.  Reusable logic:

    - redux logic can be reused.

5.  Complex, bigger and scalable web apps.

6.  Active / Bigger community of redux exist now-a-days and you seek any help if get stuck somewhere.

7.  Debugging is easier in redux.

# what is redux?

- A thirdy party state management JS library. (you have install).
- provides you a better way of managing your state/data of reat app in organised and controlled manner.
- It provides you centralised store to keep you whole app data.
- Redux follows a clear pattern of changing the data throgh the "actions" and handling of changed data with the help of "reducers".

# Who invented this Redux JS library?

- Dan Abramov and Andrew clrack

# Core principle behind the redux?

1.  Single source of truth: global single store is there.
2.  state is read-only: When you want to update the state/data, you have to dispatch an action that decribes what is going to happen in your app.
3.  Changes are made with the help of pure functions: based on the actions, you are going to update or write the reducers.

# implementation:

1.  need to install react-redux and @reduxjs/toolkit - https://redux-toolkit.js.org/introduction/getting-started

# Redux data flow - please the notes from notepad

# Redux devtool:

- It helps you to debug and manage the state values for the different components.

- Redux DevTools - Redux DevTools

# Context API vs Redux:

Context API:

    - Buit-in feature of react
    - Suitable for smaller scale web apps/react apps
    - provides a way to share your data across the app without prop drilling.
    - may lead the performance issuses due to re-rendering in the large apps.

Redux:

    - open source external state manegement JS library
    - Suitable for bigger and complex applications
    - Centralised store is used to share the data across the app (single source of truth)
    - More initial setup and require additional boilerplate code
