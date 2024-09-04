/**


   CRUD in DOM:

    - CRUD -> Create, Read/Access, Update and Delete. These are the operations that you can perform in DOM.

    - To access/read elements:

       1. document.querySlector(): returns the first element that matches the selectors
          document.querySelectorAll(): returns the NodeList of the elements that matches the selector.


       2. document.getElementById(): returns the element that matches particular id

       3. document.getElementsByClassName(): returns the HTMLCollection of elments that matches the class slectors

    -> 3 properties are used to access the content inside an element

       1. innerText: used to access the content b/w elements but exludes the hidden content.

       2. textContent: used to access the content b/w elements but includes the hidden content.

       3. innerHTML: used to access the content along the with HTML tag or access the content after removal of the HTML tags.


 */

//  const h1Elm = document.querySelector('h1');
//  const h1Elm = document.querySelector('#heading-one');
 const h1Elm = document.querySelector('.heading');
 console.log(h1Elm);

 const h1Content = h1Elm.innerText;
  console.log(h1Content);

const h1Content2 = h1Elm.innerHTML;
 console.log(h1Content2);


const h1Content3 = h1Elm.textContent;
 console.log(h1Content3);


 const divElm = document.querySelector('div');
 console.log(divElm);

 divElm.remove();

 const h2Elm = document.getElementById('h2-heading');
 console.log(h2Elm);

 const h2ElmClassName = document.getElementsByClassName('heading');
 console.log(h2ElmClassName);

 const headings = document.querySelectorAll('.heading');

 console.log(headings);

 // Create a dynamic element

 const h2AnotherElem = document.createElement('h2');


h2AnotherElem.innerText = 'I am another H2 Content';

 console.log(h2AnotherElem);

 const bodyEl = document.querySelector('body');
 bodyEl.appendChild(h2AnotherElem);

