/**

   usecases:
     - product reviews feedback
     - blog comments
     - FB Post
     - youtube comments

    Requirement:

      - add comment if any text has been entered inside input box after clcikcing the add comment button.
      - don't allow to add comment if input filed is having no entered value.
      - then create the dynamic list of comment with comment box, add reply button with each comment
      - whenever the use click on reply button then a dynmic input field add button must created.
 */

const addCommentBtn = document.getElementById('addCommentBtn');
const commentInput = document.getElementById('commentInput');
const commentList = document.getElementById('commentList');

const addComment = () => {
    const commentText = commentInput.value.trim();
    
    if(commentText !== '') {
        const commentLi = createCommentElement(commentText); 
        commentList.appendChild(commentLi);
    }
}

const addReplyInput = (parentLi) =>{

    const replyCont = document.createElement('div');

    replyCont.classList.add('reply-container');

    const inputReply = document.createElement('input');
    inputReply.type = 'text';
    inputReply.placeholder = 'Enter your reply...';


    const submitRplyBtn = document.createElement('button');
    submitRplyBtn.innerText = 'Submit';
    submitRplyBtn.addEventListener('click', ()=>{
        submitReply();
    })

    replyCont.appendChild(inputReply);
    replyCont.appendChild(submitRplyBtn);
    parentLi.appendChild(replyCont);
}

const submitReply = () => {
    // do in your assignment
    console.log('submit');
}

const createCommentElement = (text) =>{
    //console.log(commentText);
    const li = document.createElement('li');
    li.innerText = text;

    const replyBtn = document.createElement('button');
    replyBtn.innerText = 'Reply';
    // replyBtn.style.marginLeft = '10px';
    replyBtn.classList.add('reply-btn');
    replyBtn.addEventListener('click', ()=>{
        addReplyInput(li);
    })
    
    li.appendChild(replyBtn);
    return li
}
  
addCommentBtn.addEventListener('click', addComment);