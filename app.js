const addForm = document.querySelector('.add');
const todosList = document.querySelector('.todos');
const search = document.querySelector('.search input');
console.log(todosList);

//function to generate html template funnction to add the to do the list 
const generateTemplate = (todos =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <input type="checkbox" class="todoDone">
    <span> ${todos}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
`;

todosList.innerHTML += html;
})

//setup event listener to know when the user  add a new item
addForm.addEventListener('submit',e => {
    //prevent default refreshing
    e.preventDefault();
    //next get the value from the form  and clean up any white space
    const newItemValue = addForm.add.value.trim().toLowerCase();
    //next add the value to the ul
    if(newItemValue.length){
        generateTemplate(newItemValue);
        addForm.reset();
    }

})


//delete todo using event delegation
todosList.addEventListener('click', e =>{
    //console.log(e.target);
    //check if the delete element selected
    if(e.target.classList.contains('delete')){
        console.log(e.target);
        e.target.parentElement.remove();
    }
})


//function to match and filter based on the term return
const filterTodos = (term =>{
    Array.from(todosList.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))// because the return is one line i just include it therer
    .forEach(todos =>  todos.classList.add('filtered'))


    //match removing the class
    Array.from(todosList.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))// because the return is one line i just include it therer
    .forEach(todos =>  todos.classList.remove('filtered'))
})

//searching
search.addEventListener('keyup', e =>{
    //get the term
    const term = search.value.trim().toLowerCase();
filterTodos(term);
})


// strikes out item
todosList.addEventListener('change', e => {
    if(e.target.checked){
e.target.nextElementSibling.style.textDecoration = "line-through";
    }else{
        
       e.target.nextElementSibling.style.textDecoration = "none"; 
    }
    
});



