/**

   Real usecases:
    - when you deals with reviews for the products, use star ratings component.
    - online test app, to get the review or feedback

    Requirement:
     must have features:
      - Ratings 1 to 5
      - When you click on any star then it should fill the color and rating count has to updated with number
      - Hover Effect - make the color as gray if you filled the color

     Good to have:
      - Emojis can be used instea of number
      - slider
      - half filled star with decimal ratings (4.5)
 */

 const starContainer = document.querySelector('#star-container');
 const countSpan = document.getElementById('count');
 const starArr = document.querySelectorAll('.star');

 let selectedRating = 0;


const handleClick = (event) => {
    const idx = getStarIndex(event.target);
    if(idx === null) return;

    selectedRating = idx;
    starUpdates(idx);
    countSpan.innerText = `Rating Count: ${selectedRating}`;
}

const handleStarHover = (event) =>{

    event.stopPropagation();
    const idx = getStarIndex(event.target);
    if(idx === null) return;
    starUpdates(idx);
}

const handleMouseOut = () =>{
    resetStars();
}

const getStarIndex = (elem) => {
    return elem.hasAttribute('data-index') ? parseInt(elem.getAttribute('data-index')) : null;
}

const starUpdates = (idx) => {
    for(let i=0; i<starArr.length; i++) {
        starArr[i].classList.remove('star-filled');
    }

    for(let i=0; i<idx; i++) {
        starArr[i].classList.add('star-filled');
    }
}

const resetStars = () => {
    starUpdates(selectedRating);
}

starContainer.addEventListener('click', handleClick);
starContainer.addEventListener('mouseover', handleStarHover);
starContainer.addEventListener('mouseleave', handleMouseOut);





