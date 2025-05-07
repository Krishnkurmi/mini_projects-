    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let filter = 'all';

    function renderTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';

      const filtered = filter === 'all' ? tasks : tasks.filter(t => t.owner === 'me');

      filtered.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task' + (task.completed ? ' completed' : '');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleComplete(index);

        const span = document.createElement('span');
        span.textContent = task.text;

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'delete-btn';
        delBtn.onclick = () => deleteTask(index);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delBtn);

        taskList.appendChild(li);
      });
    }

    function addTask() {
      const input = document.getElementById('taskInput');
      const text = input.value.trim();
      if (!text) return;

      tasks.push({ text, completed: false, owner: 'me' });
      localStorage.setItem('tasks', JSON.stringify(tasks));
      input.value = '';
      renderTasks();
      
    }
    

    function toggleComplete(index) {
      tasks[index].completed = !tasks[index].completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }

    function filterTasks(type) {
      filter = type;
      document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
      document.querySelector(`.tab:nth-child(${type === 'all' ? 1 : 2})`).classList.add('active');
      renderTasks();
    }

    renderTasks();
    document.getElementById('taskInput').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });
