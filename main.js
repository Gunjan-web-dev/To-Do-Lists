const addBtn = document.querySelector(".btn");

const newTaskInput =document.querySelector(".addTask input");

const tasksContainer = document.querySelector(".tasks");

const taskCount = document.querySelector(".value");

const error = document.querySelector(".error");

let count = 0;

const displayCount = (count)=>{
    taskCount.innerText = count;
}

const addTask =()=>{

    const taskName = newTaskInput.value.trim();
    error.style.display = "none";

    if(!taskName){
        setTimeout(() => {
            alert("Input Field is Empty!")
            error.style.display = "block";
        }, 200);
        return;
    }
    const tasks = `<div class="task">
    <input type="checkbox" class="taskCheck">
    <span class="taskName">${taskName}</span>
    <button class="editTask">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="deleteTask">
    <i class="fa-solid fa-trash"></i>
    </button>
    </div>`

    tasksContainer.insertAdjacentHTML("beforeend",tasks)

   

    const delBtn = document.querySelectorAll(".deleteTask")

    delBtn.forEach((btn)=>{
        btn.onclick = () => {       
        btn.parentNode.remove();
        count--;
        displayCount(count);
        };
    });

    const editBtn = document.querySelectorAll(".editTask")

    editBtn.forEach((btn)=>{
        btn.onclick=(e)=>{
            let targetElement = e.target;
            if(!(e.target.className == "editTask")){
              targetElement = e.target.parentElement;

            }
            newTaskInput.value = targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();
            count--;
            displayCount(count);
        }
    })

    const checkBox = document.querySelectorAll(".taskCheck")

    checkBox.forEach((chkbox)=>{

        chkbox.onchange=()=>{
            chkbox.nextElementSibling.classList.toggle("Completed");
            if(chkbox.checked){
                count--;
            }else{
                count++;
            }
            displayCount(count);
        }
    });
count++;
displayCount(count)
newTaskInput.value = "";
}
addBtn.addEventListener("click",addTask);