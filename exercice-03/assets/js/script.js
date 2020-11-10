let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

let table = document.createElement('table');
let thead = document.createElement('thead');
let tr = document.createElement('tr');
let th = document.createElement('th');
let tbody = document.createElement('tbody');

table.classList.add('table', 'text-center', 'col-2', 'container', 'mt-5', 'table-bordered');
th.textContent = 'Languages Web';
th.classList.add('text-center', 'col');

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th);
table.appendChild(tbody);

languages.forEach(element => {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = element;
    tbody.appendChild(tr);
    tr.appendChild(td);
});