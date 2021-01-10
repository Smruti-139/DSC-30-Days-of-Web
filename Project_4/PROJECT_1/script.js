const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('input_item');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML.appendChild(<i class="fa fa-circle-o"></i>);
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML.appendChild(<i class="fa fa-trash"></i>);
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input, itemName));
        removeButton.addEventListener('click', ()=> this.remove(itemBox, itemName));

    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);

    }
}

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener("keypress", (e) =>{
    if(e.key == 13){
        check();
    }
});

new item("Morning Walk");