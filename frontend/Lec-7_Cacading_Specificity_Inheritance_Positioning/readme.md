# What is cascading in CSS? How does it work?

  - CSS stands for Cascading Style Sheets.
  - It's a process of determining how the styles are applied to the elements with multiple CSS rules.

# How cascading works? 

  - Styles in CSS are applied from top of the stylesheet to the bottom and later the styles can override the earlier ones. 

  - It works based on importance, specificity, source order, and inheritance.


 # importance 

  - We have seen there 2 different kind of styles:
    1. user-agent styles: default styles provided via your browsers.
    2. Author styles: styles defined via web developers.

  - Author styles always try to override the user-agents styles because as web dveeloper you have build the differnent layouts.

  # specificity

   - When multiple CSS rules apply to the same element, specificity determines which rule is applied.

   - specificity is calculated as score based on the types selectors.

   1. inline styles: using style attributes in a particular element
   2. Id slector
   3. classes, attributes and pesudo classes
   4. element or pesudo elements

   - precedence of selectors:

     !important > inline style > ID selector > classes/attributes/pseduo classes > element/pseudo elements (:after, :before)

# How do you calculate the specificity?

Selectors                inline style    id    classes, attributes and pesudo classes    element/pseudo elements

Initial weights/values      (0             0       0                                       0)


<h1 style="color: green"> List of items</h1>


                          1             0       0                                       0

<h1 class="heading" id="heading-text"> List of items</h1>

 #heading-text {
    color: pink;
 }

 h1[class="heading"] {
    color: gray;
 }

.heading{
    color: red;
    font-size: 48px;
    display: flex;
}

                        0            0        2      0  


# inheritance (reusability)

  - relationship is required of parent and child
  - Some CSS properties are inherited from parent to children. such as font-size, color.
  - important from reusability stand point and try to reduce the lines od code in CSS files.


# Positioning in CSS

  - will use position property

  - In CSS, position property is used to control the position of an element withing its containing element.

  - postion: static(deafult) | relative | absolute | fixed | sticky

   .container {
            position: absolute;
            border: 1px solid blueviolet;
            padding: 20px;
            top: 100px; /* no affect of top property */
            left: 50px; /* no affect of left property */
            bottom: 100px;/* no affect of bottom property */
            right: 200px;/* no affect of right property */
       }

       h1, p {
        border: 1px solid black;
        /* position: absolute; */
       }

 