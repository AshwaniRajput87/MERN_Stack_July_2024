# What is testing and types of testing?

- Testing: The code you write matches the required specifications. It is very important before making it live, you app may crashed or may not cover all the scerios of a end user.

- Types of testing:

  1.  Manual testing: QA manually test the application. (They go through the requirements and understand and write test cases)
  2.  Automated testing: you the all test cases via code by simply running a single it will automatically do testing as per the requirments

- Areas of testing:

  1.  unit testing: verifying the the small code that was being written/developed via devs. Need to verify them by wrtiing the unit test cases. (FE team develop their unit cases (RTL and JEST), BE team developr their own unit test cases (JEST))

  2.  Integration Testing: here you verify the functionality how the app is working end to end. (Devs generally do it (FE+BE)).

  3.  E2E(End to End) Testing: How closer your application as per the rquirement specifications. (QA Team)

  4.  Regression Testing: Testing the whole app again from scratch via QA to verify the whole requirments.

  5.  Performance Testing: How your web app is responsive?

  6.  stress testing: How your application works in the extreme condition?

  7.  Security testing: is you application having vulnerabilities or not.

  # write the unit test cases of React component:

  # pre-req:

  - need component
  - test behavior of the comp (counter)

        - UI (count: 0) - VDOM
        - onclick -> event[inc, dec] - > fire events

  # Tech Solution:

  1.  RTL: give the access of VDOM to provide screen, events (snapshot of your app): RTL API docs - https://testing-library.com/docs/queries/bydisplayvalue
  2.  JEST: is test runner (test, decribe, expect). JEST API doc- https://jestjs.io/docs/expect#tobevalue

  # How to implement the test cases in React APP:

       # React Testing Setup Steps:

1. npm install --save-dev @babel/core @babel/preset-env @babel/preset-react or yarn add --save-dev @babel/core @babel/preset-env @babel/preset-react

2. create a .babelrc or babel.config.js file and make this entry:
   {
   "presets": ["@babel/preset-env", "@babel/preset-react"]
   }

3. create jest.config.js and make this entry
   export default {
   transform: {
   "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
   },
   };

4. npm i -D jest jest-environment-jsdom react-test-renderer or yarn add -D jest jest-environment-jsdom react-test-renderer

5. update jest.config.js:
   export default {
   testEnvironment: 'jsdom',
   transform: {
   "^.+\\.(js|jsx)$": "babel-jest",
   },
   };

6. install RTL
   npm i @testing-library/react @testing-library/dom or yarn add @testing-library/react @testing-library/dom

7. update the script to run test cases:
   "test": "jest src" in package.json file

8. npm run test

# TDD (Test Driven Development)

- usecases: requirements must be stable

  - first write all the test cases -> write the component
  - any changes are required then refactor your test cases -> optimizing the component.

- Writing all unit test cases are exhaustive activity, So, you need to write the unit cases for critial functionalities are there fo aparticular component.
