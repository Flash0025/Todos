const input = document.querySelector('input')
const btn = document.querySelector('.btns')
// const lis = document.querySelectorAll('li')
const ul = document.querySelector('ul')

function addTask(){
    if(input.value.trim() == '') {
        alert('Input some value');
    } else {
        // create a list element
        let list = document.createElement('li');
        list.innerText = input.value;
        // create delete element
        let del = document.createElement('button')
        del.classList.add('delete');
        del.innerHTML = `<i class='bx bx-trash' ></i>`
        list.appendChild(del)
        ul.append(list);

        input.value = null;
    }
}


function deleteItems(e){
    if(e.target.nodeName == 'BUTTON') {
        let parent = e.target.parentElement;
        this.removeChild(parent);
        console.dir(e.target);
    } else if(e.target.nodeName == 'I') {
        let parent = e.target.parentElement;
        let grandParent = parent.parentElement;
        this.removeChild(grandParent);
    } else if(e.target.nodeName == 'LI') { 
        e.target.classList.toggle('red-line');
        console.dir(e.target);
    }
}

btn.addEventListener('click', addTask);
ul.addEventListener('click', deleteItems);