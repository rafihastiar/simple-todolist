//COMPLICATED WAY 
// let date = new Date(),
//     day = date.getDay(),
//     month = date.getMonth(),
//     dnum = date.getDate(),
//     year = date.getFullYear();

//     const nameMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const nameDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     const ids = ['day','month', 'daynumber', 'year']
//     const value = [nameDay[day],nameMonth[month], dnum, year];

// for (let i = 0; i < ids.length; i++) {
//     document.getElementById(ids[i]).firstChild.nodeValue = value[i];
// }


//EASIER WAY (DATE)

const dayMonth = document.querySelector('.day-month');
const time = document.querySelector('.time');

function updateTime() {
    let date = new Date();

    dayMonth.textContent = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(date);

    time.textContent = new Intl.DateTimeFormat('en-GB', {timeStyle: 'short' }).format(date);
}

updateTime();
setInterval(updateTime, 1000)

//FORM

const todoForm = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');

//Clear Empty state
todoForm.addEventListener('submit', function() {
    const description = document.querySelector('.description');
    description.remove();
}, {once : true});

todoForm.addEventListener('submit', submitList);

function submitList (){
    event.preventDefault();
    const inputValue = document.querySelector('.js-todo-input')

    //input list
    let newTodo = `<li style="list-style:none;" class="item-list"><input type="checkbox" class="checkbox" id="${inputValue.value}"><label for="${inputValue.value}" onClick="done(this)" class="text-list">${inputValue.value}</label>
    <button class="delete-list" onClick="remove(this)">X
    </button> </li>`;

   
    todoList.insertAdjacentHTML('afterbegin', newTodo);

    //clear text in form input
    inputValue.value = '';

    const ul = document.querySelector(".todo-list")
    const list = ul.querySelectorAll("li");
    console.log(list.length)

    if ( list.length == 9) {
        todoForm.removeEventListener('submit', submitList); 
        alert("Max 9 List");
    }
}
    


function done(e) {
    e.classList.toggle('done');
}
function remove(e){
    e.parentElement.remove();
}





