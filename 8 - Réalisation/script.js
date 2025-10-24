const taskInput = document.getElementById('taskInput');
            const addBtn = document.getElementById('addBtn');
            const taskList = document.getElementById('taskList');
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

            function renderTasks() {
            taskList.innerHTML = '';
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.className = 'task' + (task.completed ? ' completed' : '');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = task.completed;
                checkbox.addEventListener('change', () => toggleTask(index));
                const span = document.createElement('span');
                span.textContent = task.text;
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Supprimer';
                
                deleteBtn.addEventListener('click', () => deleteTask(index));
                li.appendChild(checkbox);
                li.appendChild(span);
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
            });
        }

        function addTask() {
            const text = taskInput.value.trim();
            if (text) {
                tasks.push({ text, completed: false });
                taskInput.value = '';
                saveTasks();
                renderTasks();
            }
       
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        }

        function saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        
        addBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTask();
        });
        renderTasks();