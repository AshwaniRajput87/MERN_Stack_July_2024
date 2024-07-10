# what is CSS? What does it do?
  - CSS stands for Cascading Style Sheet.
  - used to describe the presentation of HTML document / web page
  - proposed and invented by  Hakon Wium Lie, in 1994.
  - Now-a-days its maintained via W3C (World Wide Web Consortium)

# what is the purpose of using it?

  1. Separate the content from presentation: Keep the HTML content clean by handling the styling separately.
  2. Ensure consistency: Provide the uniform look and feel across the web pages.
  3. Enhance accessibility: Improves readablity of assistive technologies.
  4. Reduce repetition
  5. Boost performance: Enables faster load times through cached stylesheets.
  6. Support resposive web design.

  # CSS rules:

    - CSS is a rule-based language where you define some rules by specifying the group of styles to a particluar elements.

    - CSS rules are applied to the HTML elements by defining the rules inside the curly braces. 

    # ways to add styles:
      - There are 3 ways to add styles:

        1. inline style
        2. internal style
        3. external style (As a best practice use this only)  

      - User agent stylesheet:

          - default sytles applies via the browsers

      1. inline: Writing the CSS rules for a particular tag/element.

      2. internal: Writing the CSS in the same HTML file. Repetition of CSS rules are being used.

      3. external: Wrting the all styles in a common styleaheet and can use accross the mulktiple web pages/ HTML documents.


    # CSS Selectors:

      - A way to select any particular HTML element.

      - Types of selectors:

       1. classname (.(dot))
       2. id (#(hash))
       3. grouping (,(comma separated))
       4. descendant selector (elements/class/id follow another lement/class/id)
       5. children selector
       6. combinator selector
       7. element selector (element(HTML tag))
       8. universal Selector (*)
       9. attribute Selector (input[value="Enter the text"])

       Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors


    # CSS properties:

       - CSS is a rule-based language and it is having predefined properties that will be provided in a key: value pair.

       - basic properties: 
       
        1. Text - To provide color to any text then use color property.
        2. background color - use background-color property
        3. fonts are being used to present the text in a better way

          3.1. font-size
          3.2. font-family
          3.3.  font-weight

