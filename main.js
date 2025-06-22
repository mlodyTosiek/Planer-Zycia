// Zadania
const tasksForm = document.getElementById('tasks-form');
const tasksList = document.getElementById('tasks-list');
const newTaskInput = document.getElementById('new-task-input');
tasksForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = newTaskInput.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.className = 'flex items-center';
        li.innerHTML = `<input type='checkbox' class='mr-2'><span>${value}</span>`;
        tasksList.appendChild(li);
        newTaskInput.value = '';
    }
});

// Nawyki
const habitsForm = document.getElementById('habits-form');
const habitsList = document.getElementById('habits-list');
const newHabitInput = document.getElementById('new-habit-input');
habitsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = newHabitInput.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between';
        li.innerHTML = `<span>${value}</span><div class='flex space-x-1'>${[...Array(3)].map(() => "<div class='w-6 h-6 rounded-full bg-gray-100 border border-gray-300'></div>").join('')}</div>`;
        habitsList.appendChild(li);
        newHabitInput.value = '';
    }
});

// Cele
const goalsForm = document.getElementById('goals-form');
const goalsList = document.getElementById('goals-list');
const newGoalInput = document.getElementById('new-goal-input');
const newGoalProgress = document.getElementById('new-goal-progress');
goalsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = newGoalInput.value.trim();
    let progress = parseInt(newGoalProgress.value, 10);
    if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class='flex justify-between items-center mb-1'>
                <span class='text-sm font-medium'>${name}</span>
                <span class='text-sm text-gray-500'>${progress}%</span>
            </div>
            <div class='w-full bg-gray-200 rounded-full h-2'>
                <div class='bg-blue-600 h-2 rounded-full' style='width: ${progress}%'></div>
            </div>
        `;
        goalsList.appendChild(li);
        newGoalInput.value = '';
        newGoalProgress.value = '';
    }
});
