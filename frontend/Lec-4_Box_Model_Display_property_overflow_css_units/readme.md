# What is box model?

  - Everthing displayed by CSS is a box.
  - Basicalliy, box model is a fundamental concept in CSS that describes how the elements can be diplayed on the web page.

  What is total width of .box class?
  Ans:

    Formula = width of the content + left margin + left border + left padding + right padding + right border + right margin

    212px
  

  What is total height of .box class?
  Ans: 
  
  Formula = height of the content + bottom border + bottom padding + bottom margin + top padding + top border + top margin

  342px


  # what is box-sizing?

     - it's a CSS property, to determine how the size of the box is being calculated.
     - has 2 values:
        1. content-box (default value)
        2. border-box

  # CSS overflow property:

    - When the content goes out of the container that is known as overflow.

    - overflow property we can use

      values of overflow:
      1. hidden
      2. scroll
      3. auto
      3. visible

  # display property:

     display propery helps you how to show your content.

    - inline - to display elements inline and there will no effect of height and width of the content
 
    - block

    - flex - will learn in the next classes

    - grid - will learn in the next classes

    # css units:

      - It's value that is used to specifiy the size of the property(margin, padding, width, height, border etc) for an element.

      1. pixels(px): dots on your browser or screen 

                    px unit is fixed and don't want to chnage the content size.
      2. percentage(%):
                    relative unit to the size of the containing element

      3. vw and vh(viewport):

              vw is the percentage of viewport width

              vh is the percentage of viewport height

              useful for responsive designs

              1vw = 1% of the viewport width =  approx 10px (don't consider exactly contain some decimal values as well)

              1vh = 1% of the viewport height

      4. REM: (Relative EM)

          - em - relative unit and size of the content will deciding based on the parent containing element.

          - 1em = 16px


          - IQ: em vs rem

             EM: value wrt to immediate parent element.

             REM: value wrt to root element(html, :root)


    Best practices for defining the units:

     1. px used for fixed size content and can also use for border, margin, padding

     2. for responsive and fluid layouts - use % for the width and height

     3. Resposive design  - you can also use 

     4. em and rem - preferred to use rem for the text font-size




          



