/**
   Drag and Drop API:

   - Provided by the browser not by the JS
   - Allows end user to drag and drop the items/elements in specified target area.

   usecase:
   1. Moving elements b/w containers.
   2. Dragging to upload the files.
   3. used for rearranging the items in a web page.

   - How to use to it?

    These 3 steps to follow.
    1. Make element draggble -> draggable="true"
    2. Handle the events -> use addEventListener('darg&drop events name',()=>{})
    3. Data Transfer -> In dragstart, use event.dataTransfer.setData() to store the data, in drop, use event.dataTransfer.getData() to retrieve the the data.

    - drag and drop events name:

      dragstart - triggers when dragging starts
      dragend - triggers when drag ends
      drop - triggers when an item is dropped in specified target.
      dragover - triggers when an item is dropped on valid target

     

 */