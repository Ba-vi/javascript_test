
function addItem() {
    const input = document.getElementById('input');
    const itemText = input.value.trim();

    if (itemText !== '') {
        const list = document.getElementById('list');
        const listItem = document.createElement('li');
        listItem.textContent = itemText;

    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = function () {
            list.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        
        input.value = '';
    }
}

    
