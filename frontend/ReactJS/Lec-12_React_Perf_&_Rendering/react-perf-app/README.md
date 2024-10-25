# How to deploy your react app?

1. netifly.com
2. do sign up (Github) - (https://app.netlify.com/signup)
3. do login
4. add new site - click on it
5. do the project configuration from github
6. Deploy movie-app -> click on it
7. deploying you site button clcik on it.

# React perf and rendering:

1. code splitting and lazy loaing:

   - Whenever you build your react application with the help of multiple components, pages and features. All the components get converted into the JS bundle files.

   - If you don't split the react code into chunks, there are few performance issues you will in loading of your app:

     1. Loading intial time would be more.
     2. Poor performance
     3. Unnecessary rendering

   - If you split it what benefits you will get in react app?

     - This code splitting idea taken from dynamic import.

     - What is dynamic import?

       - Dynamic import is a feature provided by JavaScript, you use import().then((module)=>setHomePage(module.default)) -> You are loading the components based on demands.

       - Drawbacks of using dynamic import in react app:

         1. You have manage multiple states
         2. You have put the loader for loading each and every components
         3. Seems duplicate code as well
         4. Keeping the things in one place.

   - React lazy loading and React Supspense

     - React.lazy() -> To load the components asynchronously
     - React Suspense -> Help to provide the loader indicator, if the components are getting loading lazily

- Memoization:

  - is used to Ssve the cached results and the functions as well.
  - In react, this memoisation concept is being used, how to use in react ?

    - useMemo()
      - Without using useMemo() scenario
      - useMemo() - is a hook in react to cached your resulted value. First time value is calculted but when same value you need at some point in time and is the component is getting re-rendeerd due chnage in one of the state varibales or props then second time onwards, useMemo() will retrive the cached value not re-calculating all those values again ana again.
    - useCallack() - useCallback hook returns a memoized version of the callback function that only changes if one of the dependencies has changed. In this case, we have no dependencies, so removeItem will be memoized and will not change across renders.

    Optimization: Since removeItem is now memoized, it maintains the same reference between renders unless the state changes. This prevents unnecessary re-renders of the child components, thus improving performance.

    - React.memo() - will do in next session
