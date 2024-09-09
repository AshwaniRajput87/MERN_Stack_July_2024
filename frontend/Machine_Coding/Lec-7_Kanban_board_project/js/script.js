let addModal = true;
let modalPriorityColor = 'red';
let taskArr = [];
let currentStatus = 'todo';



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
        const id = new ShortUniqueId().randomUUID();
        const ticketCont = createTicketElement(task, id, modalPriorityColor);
        console.log(ticketCont);
        query('#todo').appendChild(ticketCont);
        // update taskArr.push()
         taskArr.push({id, task, color: modalPriorityColor, status: currentStatus});

        // update the taskArr data in local storage
        updateLocalStorage(taskArr);
        closeModal();
        textArea.value = '';
    }
 }


/**
  open the model for creating the tickets
    - click on + icon, open the model via attaching addeventlistener (display: flex)

 */ 

const toggleModal = () => {
    const modal = query('.modal-overlay');
    modal.style.display = addModal ? 'flex' : 'none';
    addModal = !addModal;
}


/**
   close the modal
     - clciking on lcode icon of the modal, close the modal (dispaly: none)
*/

const closeModal = () => {
    toggleModal();
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
        }
    });

    query('.modal-close-btn').addEventListener('click', ()=>{
        closeModal();
    });

    query('.create-task').addEventListener('click', createTicketHandler);

    queryAll('.priority-color').forEach((elem)=>{
        elem.addEventListener('click', handlePriorityColorClick);
    })

}

const initKanbanboard = () => {
    taskArr = loadTicketsFromLocalStorage();
    renderStoredTickets(taskArr);
    setupEventListeners();
}

initKanbanboard();

// Assignment - Applying filtering/grouping of the task