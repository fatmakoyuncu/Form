

function rand() {
    var a = document.getElementById("id");
    a.value = Math.floor(10 + Math.random() * (1000 - 10));

}

const form = document.querySelector('form');
const id = document.querySelector('#id');
const userName = document.querySelector('#name');
const lastName = document.querySelector('#lastname');
const phone = document.querySelector('#phone');
const address = document.querySelector('#address');
const outputContent = document.querySelector('.outputContent');
const taskList = document.querySelector('#task-list');

eventListeners();

function eventListeners() {
    form.addEventListener('submit', addNewItem);
}

function addNewItem(e) {


    const ul = document.createElement('ul');
    ul.className = "task-list";

    let dizi = [id, userName, lastName, phone, address];

    for (let i = 0; i < dizi.length; i++) {
        const li = document.createElement('li');
        li.className = 'list-group-item list-group-secondary';
        outputContent.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(document.createTextNode(dizi[i].value));
        // ul.appendChild(li);
        li.innerText = dizi[i].value;
     




    }


    // li.appendChild(document.createTextNode(userName.value));
    // li.appendChild(document.createTextNode(lastName.value));
    // li.appendChild(document.createTextNode(phone.value));
    // li.appendChild(document.createTextNode(address.value));





    id.value = '';
    userName.value = '';
    lastName.value = '';
    phone.value = '';
    address.value = '';

    e.preventDefault();

    document.getElementById('phone').addEventListener('blur', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);
        e.target.value = '(' + x[1] + ') ' + x[2] + '-' + x[3];
    });

}




