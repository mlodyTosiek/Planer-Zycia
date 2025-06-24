// Inicjalizacja lokalnego storage
const storage = {
    save: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
    load: (key) => JSON.parse(localStorage.getItem(key) || '[]')
};

// Inicjalizacja elementów DOM
const elements = {
    tasks: {
        form: document.getElementById('tasks-form'),
        list: document.getElementById('tasks-list'),
        input: document.getElementById('new-task-input')
    },
    habits: {
        form: document.getElementById('habits-form'),
        list: document.getElementById('habits-list'),
        input: document.getElementById('new-habit-input')
    },
    goals: {
        form: document.getElementById('goals-form'),
        list: document.getElementById('goals-list'),
        input: document.getElementById('new-goal-input'),
        progress: document.getElementById('new-goal-progress')
    }
};

// Obsługa zadań z kategoriami i priorytetami
class TaskManager {
    constructor() {
        this.tasks = storage.load('tasks');
        this.render();
        this.setupEventListeners();
    }

    addTask(text, category = 'ogólne', priority = 'normalne') {
        const task = {
            id: Date.now(),
            text,
            category,
            priority,
            completed: false,
            createdAt: new Date(),
            dueDate: null
        };
        this.tasks.unshift(task);
        this.save();
        this.render();
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.save();
            this.render();
        }
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.save();
        this.render();
    }

    save() {
        storage.save('tasks', this.tasks);
    }

    render() {
        elements.tasks.list.innerHTML = this.tasks.map(task => `
            <li class="flex items-center justify-between p-2 ${task.completed ? 'bg-gray-100' : ''} 
                     ${task.priority === 'wysoki' ? 'border-l-4 border-red-500' : 
                       task.priority === 'niski' ? 'border-l-4 border-green-500' : ''}">
                <div class="flex items-center">
                    <input type="checkbox" ${task.completed ? 'checked' : ''} 
                           class="mr-2" onclick="taskManager.toggleTask(${task.id})">
                    <span class="${task.completed ? 'line-through text-gray-500' : ''}">${task.text}</span>
                    <span class="ml-2 text-sm text-gray-500">${task.category}</span>
                </div>
                <button onclick="taskManager.deleteTask(${task.id})" 
                        class="text-red-500 hover:text-red-700">×</button>
            </li>
        `).join('');
    }

    setupEventListeners() {
        elements.tasks.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = elements.tasks.input.value.trim();
            if (text) {
                this.addTask(text);
                elements.tasks.input.value = '';
            }
        });
    }
}

// Obsługa nawyków z monitorowaniem postępu
class HabitManager {
    constructor() {
        this.habits = storage.load('habits');
        this.render();
        this.setupEventListeners();
    }

    addHabit(text) {
        const habit = {
            id: Date.now(),
            text,
            streak: 0,
            lastChecked: null,
            checkmarks: Array(3).fill(false),
            createdAt: new Date()
        };
        this.habits.unshift(habit);
        this.save();
        this.render();
    }

    toggleCheckmark(habitId, index) {
        const habit = this.habits.find(h => h.id === habitId);
        if (habit) {
            habit.checkmarks[index] = !habit.checkmarks[index];
            
            // Aktualizacja streaka
            const today = new Date().toLocaleDateString();
            if (habit.checkmarks.every(check => check)) {
                if (habit.lastChecked !== today) {
                    habit.streak++;
                    habit.lastChecked = today;
                }
            } else {
                habit.streak = 0;
            }
            
            this.save();
            this.render();
        }
    }

    deleteHabit(id) {
        this.habits = this.habits.filter(h => h.id !== id);
        this.save();
        this.render();
    }

    save() {
        storage.save('habits', this.habits);
    }

    render() {
        elements.habits.list.innerHTML = this.habits.map(habit => `
            <li class="flex items-center justify-between p-2">
                <div class="flex items-center">
                    <span>${habit.text}</span>
                    <span class="ml-2 text-sm text-gray-500">Seria: ${habit.streak} dni</span>
                </div>
                <div class="flex space-x-2">
                    ${habit.checkmarks.map((checked, i) => `
                        <button onclick="habitManager.toggleCheckmark(${habit.id}, ${i})"
                                class="w-6 h-6 rounded-full ${checked ? 
                                'bg-green-500 text-white' : 'bg-gray-100 border border-gray-300'}">
                            ${checked ? '✓' : ''}
                        </button>
                    `).join('')}
                    <button onclick="habitManager.deleteHabit(${habit.id})" 
                            class="text-red-500 hover:text-red-700 ml-2">×</button>
                </div>
            </li>
        `).join('');
    }

    setupEventListeners() {
        elements.habits.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = elements.habits.input.value.trim();
            if (text) {
                this.addHabit(text);
                elements.habits.input.value = '';
            }
        });
    }
}

// Obsługa celów z wizualizacją postępu
class GoalManager {
    constructor() {
        this.goals = storage.load('goals');
        this.render();
        this.setupEventListeners();
        this.initializeCharts();
    }

    addGoal(name, progress) {
        const goal = {
            id: Date.now(),
            name,
            progress: Math.min(100, Math.max(0, progress)),
            createdAt: new Date(),
            history: [{
                date: new Date(),
                progress: progress
            }]
        };
        this.goals.unshift(goal);
        this.save();
        this.render();
        this.updateCharts();
    }

    updateProgress(id, progress) {
        const goal = this.goals.find(g => g.id === id);
        if (goal) {
            goal.progress = Math.min(100, Math.max(0, progress));
            goal.history.push({
                date: new Date(),
                progress: progress
            });
            this.save();
            this.render();
            this.updateCharts();
        }
    }

    deleteGoal(id) {
        this.goals = this.goals.filter(g => g.id !== id);
        this.save();
        this.render();
        this.updateCharts();
    }

    save() {
        storage.save('goals', this.goals);
    }

    render() {
        elements.goals.list.innerHTML = this.goals.map(goal => `
            <li class="mb-4 p-3 bg-white rounded-lg shadow">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-lg font-medium">${goal.name}</span>
                    <div class="flex items-center">
                        <input type="number" min="0" max="100" value="${goal.progress}"
                               onchange="goalManager.updateProgress(${goal.id}, this.value)"
                               class="w-16 p-1 mr-2 border rounded">
                        <span class="text-sm text-gray-500">${goal.progress}%</span>
                        <button onclick="goalManager.deleteGoal(${goal.id})"
                                class="text-red-500 hover:text-red-700 ml-2">×</button>
                    </div>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                         style="width: ${goal.progress}%"></div>
                </div>
                <div class="mt-2 text-sm text-gray-500">
                    Utworzono: ${new Date(goal.createdAt).toLocaleDateString()}
                </div>
            </li>
        `).join('');
    }

    initializeCharts() {
        // Inicjalizacja wykresów przy użyciu Chart.js
        if (window.goalsChart) {
            window.goalsChart.destroy();
        }

        const ctx = document.getElementById('goalsChart').getContext('2d');
        window.goalsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.goals.map(g => g.name),
                datasets: [{
                    label: 'Postęp celów',
                    data: this.goals.map(g => g.progress),
                    backgroundColor: 'rgba(59, 130, 246, 0.5)',
                    borderColor: 'rgb(59, 130, 246)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    updateCharts() {
        if (window.goalsChart) {
            window.goalsChart.data.labels = this.goals.map(g => g.name);
            window.goalsChart.data.datasets[0].data = this.goals.map(g => g.progress);
            window.goalsChart.update();
        }
    }

    setupEventListeners() {
        elements.goals.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = elements.goals.input.value.trim();
            const progress = parseInt(elements.goals.progress.value, 10);
            
            if (name && !isNaN(progress) && progress >= 0 && progress <= 100) {
                this.addGoal(name, progress);
                elements.goals.input.value = '';
                elements.goals.progress.value = '';
            }
        });
    }
}

// Inicjalizacja menedżerów
const taskManager = new TaskManager();
const habitManager = new HabitManager();
const goalManager = new GoalManager();

// System motywacyjnych cytatów
const quotes = [
    "Sukces to suma małych wysiłków, powtarzanych dzień po dniu.",
    "Nie czekaj na idealny moment. Zacznij tam, gdzie jesteś i z tym, co masz.",
    "Twoja przyszłość jest tworzona przez to, co robisz dzisiaj, nie jutro.",
    "Każdy dzień to nowa szansa, by stać się lepszą wersją siebie.",
    "Małe kroki też prowadzą do celu, najważniejsze to iść do przodu."
];

// Aktualizacja cytatu dnia
function updateQuote() {
    const quoteElement = document.getElementById('daily-quote');
    if (quoteElement) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = randomQuote;
    }
}

// Aktualizacja cytatu co 24 godziny
updateQuote();
setInterval(updateQuote, 24 * 60 * 60 * 1000);

// Animacje przy dodawaniu nowych elementów
function addAnimation(element) {
    element.classList.add('animate-fade-in');
    setTimeout(() => element.classList.remove('animate-fade-in'), 500);
}

// Obsługa motywów kolorystycznych
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

// Załadowanie zapisanego motywu
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
}
