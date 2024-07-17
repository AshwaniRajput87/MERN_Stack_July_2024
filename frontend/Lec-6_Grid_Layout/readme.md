# What is Grid Layout?

  - It's a 2D layout system for arranging the content in rows and columns.
  - a powerful way to structure and design the content in both rows and columns.
  - Before making parctical hands on the Grid layout, we need to understand grrid terminologies and grid properties:

  - Grid terminologies - please refer the notes on the notepad
  
  - Grid properties:
     1. grid container: 
          display: grid (block level grid)
          display: inline-grid (inline level grid)

     2. grid items: These are the child elements inside the grid container.

     3. Grid rows: specify the rows in the grid
        grid-template-rows: <length> 100px | percentage (25| fr units: 1fr | repeat(): repeat(3, 1fr)| repeat(4, 2fr) | minmax(100px, 1fr))

     4. grid columns: specify the coloumns in the grid: 
        grid-template-columns: <length> 100px | percentage (25| fr units: 1fr | repeat(): repeat(3, 1fr)| repeat(4, 2fr) | minmax(100px, 1fr))

    5. grid-area: naming the grid areas and specifies their arrangement

     grid-template-areas: 'header header';
     grid-template-areas: 'siderbar main'
     grid-template-areas: 'footer footer'

    6. grid gap: shorthand of grid col gap and grid row gap

       grid-gap: 10px 20px | 10px

    7. grid column gap: 

         grid-column-gap: <length>: 20px

    8. grid row gap:

         grid-row-gap: <length>: 10px


Reference:
1. https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows

2. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids


# flexbox vs grid:

flexbox:

 - 1-D layout system
 - to render the content either in a row(horizonatlly/main-axis) or in a col(vertically (cross-axis))
 - flexbox container:
    display: flex;
    justify-content
    align-items
    flex-direction (row)




grid:

  - 2-D layout system
  - to render your content in both rows and columns
  - grid container

     display: grid
     grid-template-rows
     grid-template-columns
     grid-template-areas
     grid-area


My recommendation: Go with Grid layout system now-a-days in any frontend project.

Query:
-------------
is 25% and 25fr same?

- No, why?

- using 25% to row - each row will take exactly only 25% of the grid container's height.

- using 25fr to row - each row will equally share the available space inside the grid container proprotionally.