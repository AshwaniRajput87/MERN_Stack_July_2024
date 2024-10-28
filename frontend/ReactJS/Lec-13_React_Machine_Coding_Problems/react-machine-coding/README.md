# React.memo():

- It's HOC in React used to optimize performance by preventing unnecessary re-rending of a component.

- It memoizes the component, that means react will remmeber its last ouput and only re-render if its props getting changed.

- React.memo() will use for Functional Components only

# React Machine coding problems:

1.  useRef() hook:

    - It's a hook and utilised to access the DOM element directly.

    - You can interact with DOM elements directly then you have use the useRef() hook.

2.  Stop watch:

    Required features:

        - Display the timer  00:00:00
        - start button to start the timer
        - stop button to stop the stop watch
        - reset button to reset the stop watch
           00: 00: 00

3.  Automatic Image with text carousel (Automatic Carousel)

    Required features:

    - required images and text to be dispalyed on the browser.

    const items = [
    {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Item 1',
    description: 'Description of item 1',
    },
    {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Item 2',
    description: 'Description of item 2',
    },
    {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Item 3',
    description: 'Description of item 3',
    },
    ]

    2. it must get next and previous items automatically

    3. Custom Hook:

       Make the visibility of Modal

       - Show some modal with content

       - make its visibility based on custom hook

       - can i use a thrid party Modal or just a dummy text and description is suffuce for buliding a modal.
