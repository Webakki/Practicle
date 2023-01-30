
// Getting the parent element in which
// the new div will be created
let Tasks = document.getElementsByClassName("Tasks");



// Getting the AddTask button element
let AddTask = document.getElementById("AddTask");


// Adding on click event to the button
AddTask.addEventListener('click', function (){

    // Traversing through collection of HTMl
    // elements (Tasks Here)
    for (let i = 0; i < Tasks.length; i++) {

        // New div element is created
        let newDiv = document.createElement("div");
        
    //    Setting the attribute of class type to newDiv
        newDiv.setAttribute("class", "list");

    //  innerText used to write the text in newDiv
        newDiv.innerText = "New Div Created";
    
        // Finally append the newDiv to the parent i.e tasks
        Tasks[i].append(newDiv)
    }
})