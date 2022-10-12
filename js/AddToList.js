// first of all we want to get our list from our html because we want to add items, before its end using , insertAdjacentHTML element
alert("hello, world")
const list=document.getElementById("list");

const btn=document.getElementById("btn");


// add to our list using constants to be change soon in our aplication

const CHECK="fa-check-circle";
const UNCHECK="fa-circle-thin";
const LINE_THROUGH="lineThrough"

// function to add item to our list



 const  addTodo=(addTodos,id,done,trash)=>{
    // here we use template literals 

    // if we click the thrash btn then we want to return

    if(trash) return;

    // logic to test for state

    const DONE=done ? CHECK : UNCHECK;
    const LINE=done ? LINE_THROUGH : "";

    const text=`<li class="item">
    <div class="div">
    <i class="fa ${DONE}" job="complete" id="${id}"></i>
    <p class="text ${LINE} ">${addTodos}</p>
    </div>
    <i class="fa fa-trash-o" job="delete" ></i>

    
    </li>`

    // our position we want to used, beforeend. afterend, beforebegin, afterbegin
// before end of ul tag
    const position="beforeend"

    // now we use the insertAdjacent function
    list.insertAdjacentHTML(position, text)
}

// function to complete todo

function complteteTodo (element) {
    // we just need to toggle the element if its content classList or not
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    // toggle the done propety as follows
    LIST[element.id].done=LIST[element.id].done ? false : true;

}

// function to remove todo
function removeTodo (element) {
 element.parentNode.parentNode.removeChild(element.parentNode);
 LIST[element.id].trash=true;
}

// deal with the list when clicked
list.addEventListener('click', (e)=>{
    let element=e.target;
    console.log(element);
    const elementJOB=e.target.attributes.job.value;
   if(elementJOB==="complete") {
    complteteTodo(element);

   }

   else if (elementJOB==='delete') {
    removeTodo(element)
   }
})



// save our list item to local storage=
// function storeItem(){
//     localStorage.setItem("TODO", JSON.stringify(LIST));

// }
export default addTodo