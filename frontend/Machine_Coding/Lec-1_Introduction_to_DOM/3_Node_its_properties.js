/**
   What is node property in DOm and How to access those properties?

     -> Represents the element or node in DOM- > know as nodes

     -> DOM nodes represents in 3 formats:
     1. elements - level 1 - nodeType = 1
     2. attributes - level 2 - nodeType = 2
     3. text content - level 3 - nodeType =3


     Common node properties:

      1. nodeName - returns the name of the node
      2. nodeType
      3. nodeValue - get or set the value of attribute


      Element specific node properties:

      tagName - name of the HTML tag
      id - gets the id value of a particular element
      class - will give the value of class attribute
      textContent: use to provide the text content of a particluar element.
      style: use to provide the style of a particular element



 */

 const h1El = document.getElementById('heading-one');

 console.log(h1El.nodeName);
  console.log(h1El.nodeType);

console.log(h1El.innerText);


/**

   NodeList vs HTMLCollection:

   1. types of nodes:

      HTMLCollection: contains only elements nodes (div, span)

      NodeList: can contain any types of nodes (element nodes. attribute nodes, text content nodes)

    2. Access:

       HTMLCollection:  can the access elements by name/id or via a index as well 

       NodeList: you can only access via index.
 */


 const h2El = document.getElementsByTagName('h2');
 console.log(h2El["h2-heading"]);

 const h2El1 = document.querySelectorAll('h2');

 console.log(h2El1);



 // doubt resolutions:

 const h2ById = document.getElementById('h2-heading');
 console.log(h2ById.innerText);


