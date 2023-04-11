const itemsInput = document.querySelector('.itemsInput');
const btn = document.querySelector('.btn');
const toDoList = document.querySelector('.toDoList');
const haveDoneList = document.querySelector('.haveDoneList');

btn.addEventListener('click', function() {
    const item = document.createElement('li');
    console.log(item);
    item.innerText = itemsInput.value;
    itemsInput.value = ' ';
    toDoList.appendChild(item); 
    item.classList.add('toDoListItem');

    item.addEventListener('click', function() {
        item.classList.add('toDoListHover');
        
        item.addEventListener('dblclick', function(){
            toDoList.removeChild(item); 
            haveDoneList.appendChild(item);
            item.classList.add('haveDoneList');
        })
    
}) 
item.addEventListener('dblclick', function(){
    haveDoneList.removeChild(item);
})      
})

//Animation 

gsap.from(".header", {x: -200, duration: 2, opacity: 0, delay:0.5})
gsap.from(".container", {x: -200, duration: 2, opacity: 0, delay:1})
gsap.from(".lists", {y: 200, duration: 2, opacity: 0, delay:1.5, stagger: 1})