
 const todoForm = document.getElementById('todoForm');
 const taskInput = document.getElementById('taskInput');
 const todoList = document.getElementById('todoList')
 todoForm.addEventListener('click', (e) => {
   e.preventDefault();
   const task = taskInput.value.trim()
   if (task) {
     const listItem = document.createElement('li');
     listItem.className = 'flex items-center bg-gray-50 p-2 rounded-md shadow-sm';
     listItem.innerHTML = `
       <input type="checkbox" class="h-5 w-5 text-indigo-500 focus:ring-indigo-400" />
       <span class="flex-1 ml-3 text-gray-700">${task}</span>
       <button class="text-red-500 hover:text-red-700 ml-auto">✖</button>
     `
     // Remove task on button click
     listItem.querySelector('button').addEventListener('click', () => {
       listItem.remove();
     })
     todoList.appendChild(listItem);
     taskInput.value = '';
   }
 });
