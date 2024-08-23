/**
   
    what is a browser?

       - A software app for accessing and presenting the information on the web in human-readbale format.

    What are the components that make up the browser?

      - UI(USer Interface)
      - Rendering Engine (used to diplay the content via HTML and CSS)
      - JS Engine (to execute the JS code)
      - Data Storage (store the data at client side) (cookies, local storage and session storage)
      - Networking (Where you see http/https comunications)

    How the browsers allow the developers to interact these components of the browsers?

      - Web APIs:

         - An interface to access all the components of the browser.
         - These APIs represents an object fot the components/features.
         - A developer can interact with API using its exposed properties and methods.
         - Examples: DOM API, Web storage API, Fetch API
         
         - console.log('Console data');

    First principle:

       - To implement any feature/component of the browser -> you will the given API by the browser and that API always an object -> methods and props and you will use JS to implement those APIs

    - What is DOM and DOM API?

       - DOM (Document Object Model)

       - DOM API: represents an object -> document

        - document:
           -> It's a global object representing the loaded HTML document in a browser

           -> This document object, you will to access and manipulate the the content of a web page.

           -> Acts as a bridge b/w the HTML and JS which allow the developers to dynamically interact with elements and respond to the user interactions.

        - #document:

           -> represents the root node of the HTML document.

*/