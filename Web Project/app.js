document.getElementById('add-task').addEventListener('click',function() {
    const tasktest = document.getElementById('new-task').Value;
    if (tasktest ==='')return;
    const li = document.createElement('li');
    li.textContent = tasktest;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
    li.appendChild(deleteButton);
    document.getElementById('task-list').appendChild(li);

    document.getElementById('new-task').value = '';
});

document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});