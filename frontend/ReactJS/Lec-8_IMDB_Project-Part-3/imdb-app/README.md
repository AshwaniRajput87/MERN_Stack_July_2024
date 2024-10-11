# project UI shown - Refer notes

# IMDB project set up - Completed

# IMDB Routes set up

# Add tailwind css

- set up - https://tailwindcss.com/docs/guides/create-react-app

- setup - postcss and autoprefixer for prod code - https://dev.to/sakibsnaz/installing-tailwind-css-as-a-postcss-plugin-and-vite-5h64

- npm install -D tailwindcss postcss autoprefixer

- config file creation - npx tailwindcss init

- To show the watchlist of movies page -

  For TMDB end points - https://developer.themoviedb.org/reference/intro/getting-started

  For images /poster images baseURL - https://developer.themoviedb.org/docs/image-basics
  Eg:

  https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
  https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
  https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

  1.  you need end points - we will use TMDB API - do signup (https://www.themoviedb.org/signup) - then do login

  2.  API key and Auth token - it will allow you to acees the movies

  3.  All the end points here - https://developer.themoviedb.org/reference/intro/getting-started

# context API

- Why should you use context API?

  - because prop drilling problem in React

- what is prop drilling?

  - a situation occurs when you are passed down the props through multiple levels of nested components to reach on a particular component where the data is required.

- What are the challenges there?

  - Components are getting re-rendered whenever the props are getting updating via state varibales.

  - Maintenance cost and dev efforts and testing efforts will be increased. Over scope of work for delivering a particular will be increased.

- How to fix above problem?

  - context api

    Context API is provided by React which is a way to share you data among components without need to pass props manually theorug each level of the component tree.

    - usecase of context API : counter

    - How to implememt te context API?

      1.  create context
      2.  Provide the values via Context Provider to the repective nested level components

    - Implement the context API for counting the number of movies added in favList navbar link. (Assignment)
