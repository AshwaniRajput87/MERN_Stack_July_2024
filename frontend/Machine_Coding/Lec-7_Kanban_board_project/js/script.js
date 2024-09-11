let addModal = true;
let modalPriorityColor = 'red';
let taskArr = [];
let currentStatus = 'todo';
let removeFlag = false;
let lastFocusedElement = null;


/**

  Deleting a ticket

 */

 const toggleRemoveFlag = () =>{
    removeFlag = !removeFlag;
    query('.remove-btn').style.color = removeFlag ? 'red' : 'black';
    
 }

 const addDeleteHandler = (ticketCont, id) => {
    console.log(ticketCont, id);

    
        ticketCont.addEventListener('click', ()=>{
            console.log('handler called');
            if(removeFlag){
                ticketCont.remove();

                // after removing the tickets update the loacalstorage. (Assignment)
            }
        });
    
 }

/***
   Handling lock and unlock the content. Update the tickets.
 */

 const addLockUnLockHandler = (ticketCont, id) => {

    const lockUnlockBtn = ticketCont.querySelector('.fa-solid');

  //console.log(lockUnlockElem);
    const ticketTask = ticketCont.querySelector('.ticket-task'); 

    lockUnlockBtn.addEventListener('click', ()=>{

        lockUnlockBtn.classList.toggle('fa-lock');
        lockUnlockBtn.classList.toggle('fa-unlock');

        ticketTask.contentEditable = lockUnlockBtn.classList.contains('fa-unlock');


        const idx = taskArr.findIndex((obj)=> obj.id === id);

        taskArr[idx].task = ticketTask.innerText;

        updateLocalStorage(taskArr);
    });



 }

/**
   localStorage implementation in Kanban board project
 */

 const updateLocalStorage = (tasks) => {
    localStorage.setItem('tickets', JSON.stringify(tasks));
 }


 /**
   on reload/referesh of the page, you tickets has to be visible/persist
 */

const appendTicketElement = (container, id, task, color) =>{
    const ticketElem = createTicketElement(task, id, color);
    container.appendChild(ticketElem);
    addLockUnLockHandler(ticketElem, id);
    addDeleteHandler(ticketElem, id);
}

const loadTicketsFromLocalStorage = () => {
    const storedTickets = localStorage.getItem('tickets');
    console.log(JSON.parse(storedTickets));
    return storedTickets ? JSON.parse(storedTickets): [];
}

const renderStoredTickets = (tasks) =>{
    tasks.forEach(({id, task, color, status})=>{
        const container = query(`#${status}`); // #todo, #inprogress, #comleted
        appendTicketElement(container, id, task, color);
    })
}

/**
   Provide the priority of the ticket while creating them.
 */

 const handlePriorityColorClick = (event) =>{
   console.log('priority color');

   const priorityColorElem = event.target;

   queryAll('.priority-color').forEach((elem)=>{
        elem.classList.remove('active');
   });

   priorityColorElem.classList.add('active');
   console.log(priorityColorElem.classList[1]);

   modalPriorityColor = priorityColorElem.classList[1];
 }


/**
   create ticket elements
 */

 const createTicketElement = (task, id, priorityColor) => {
    const ticketCont = document.createElement('div');

    ticketCont.className = 'ticket-cont';
    ticketCont.id = id;
    ticketCont.draggable = true;

    ticketCont.innerHTML = `
         <div class="ticket-color ${priorityColor}"></div>
        <div class="ticket-id">${id}</div>
        <div class="ticket-task">${task}</div>
        <div class="lock-unlock">
            <i class="fa-solid fa-lock"></i>
        </div>
    `;

    return ticketCont;
 }


/**
    Creating a ticket in todo container
 */

 const createTicketHandler = () => {

    const textArea = query('.modal-textarea');
    const task = textArea.value.trim();

    if(task) {
        const id = `kb-${new ShortUniqueId().randomUUID()}`;
        const ticketCont = createTicketElement(task, id, modalPriorityColor);
        console.log(ticketCont);
        // ticketCont.draggable = true;
        query('#todo').appendChild(ticketCont);
        // update taskArr.push()
        taskArr.push({id, task, color: modalPriorityColor, status: currentStatus});

        // update the taskArr data in local storage
        updateLocalStorage(taskArr);
        closeModal();
        textArea.value = '';
        addLockUnLockHandler(ticketCont, id);
        addDeleteHandler(ticketCont, id);
    }
 }


/**
  open the model for creating the tickets
    - click on + icon, open the model via attaching addeventlistener (display: flex)

 */ 

const toggleModal = () => {
    const modal = query('.modal-overlay');
    if(addModal){
        lastFocusedElement = document.activeElement;
        modal.style.display = 'flex';

        query('.modal-textarea').focus();
    } else {
        modal.style.display = 'none';
        if(lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }
    addModal = !addModal;
    
}


/**
   close the modal
     - clciking on lcode icon of the modal, close the modal (dispaly: none)
*/

const closeModal = () => {
    toggleModal();
}

const handleDragStart = (event) =>{
  console.log('drag event start');
  event.dataTransfer.setData("text/plain", event.target.id);
  event.target.classList.add('dragging');
}

const handleDragEnd = (event) =>{
    console.log('dragend event start');
    event.target.classList.remove('dragging');
}

const handleDrop = (event) =>{
    console.log('drop event');
    const ticketId = event.dataTransfer.getData("text/plain");
    console.log(ticketId);

    const droppedTicket = query(`#${ticketId}`);
    console.log(droppedTicket);
    const targetContainer = event.target.closest('.ticket-container');
    console.log(targetContainer);

    if(droppedTicket && targetContainer) {
        const sourceCont = droppedTicket.closest('.ticket-container');
        console.log(sourceCont);

        sourceCont.removeChild(droppedTicket);
        targetContainer.appendChild(droppedTicket);
        console.log()
        const idx = taskArr.findIndex((obj)=>obj.id === ticketId);

        taskArr = loadTicketsFromLocalStorage();

        taskArr[idx].status = targetContainer.id;

        updateLocalStorage(taskArr);
    }
}

/**
 *  Helper functions for query selectors
 */
const query = (selector) => document.querySelector(selector); // query('.open-modal')
const queryAll = (selector) => document.querySelectorAll(selector);// queryAll('priority-color')

const setupEventListeners = () => {
    // find the target element (plus icon)
    query('.toolbox-cont').addEventListener('click', (event)=>{
        const targetClassList = event.target.classList;
        if(targetClassList.contains('fa-plus')){
            toggleModal();
        } else if(targetClassList.contains('fa-trash')) {
            toggleRemoveFlag();
        }
    });

    query('.modal-close-btn').addEventListener('click', ()=>{
        closeModal();
    });

    query('.create-task').addEventListener('click', createTicketHandler);

    queryAll('.priority-color').forEach((elem)=>{
        elem.addEventListener('click', handlePriorityColorClick);
    });

    const mainCont = query('.main-cont');

    mainCont.addEventListener('dragstart', handleDragStart);
    mainCont.addEventListener('dragover', (event)=>{event.preventDefault()});
    mainCont.addEventListener('dragend', handleDragEnd);
    mainCont.addEventListener('drop', handleDrop);

}

const initKanbanboard = () => {
    taskArr = loadTicketsFromLocalStorage();
    renderStoredTickets(taskArr);
    setupEventListeners();
}

initKanbanboard();

// Assignment - Applying filtering/grouping of the task