
    let inputBox = document.getElementById('input-box');
    let addButton = document.getElementById('add-button');
    let listContainer = document.getElementById('list-container');
    

    addButton.addEventListener('click', function addTask() {
        if (inputBox.value === '') {
            alert('please enter a task');
        }
        else {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(inputBox.value))
            listContainer.appendChild(li)
            inputBox.value = ""
           

            let btn = document.createElement('button')

            btn.id="delete"
            btn.textContent = 'Delete'
            li.appendChild(btn)
           
           
         
        saveData();

        }


    })
    listContainer.addEventListener('click', (e)=>{
        if(e.target.tagName === "BUTTON" && e.target.id === "delete"){
            e.target.parentElement.remove()
            saveData();
        }
    })
    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML)
    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data")
        
    }

    showTask()
