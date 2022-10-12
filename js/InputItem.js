// this is going to help us import our items

import addTodo from "./AddToList.js";

const input=document.getElementById("input");
//  THIS WHERE WE ARE GOING TO PUSH OUR ITEMS TO THE LIST WHEN ENTERED
let LIST=[];
let id;

document.addEventListener("keyup", function(event){
    if(event.keyCode===13){
    // what happens when we click the enter btn
    const todo=input.value;
    console.log(todo)
    if(todo){
        // we are going to add more params to our addTodo function, which will be inserted in our object
        addTodo(todo, id,false, false)
LIST.push({
    name:todo,
    id:id,
    done:false,
    trash:false
})
console.log(LIST);

    }
    
    input.value=""
    // after that we increment the id by one
    id++;
    }
    })
    
