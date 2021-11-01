import { useState, useEffect } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import CompletedTasks from './components/CompletedTasks';
import NewTask from './components/NewTask';
import Sidebar from './components/Sidebar';
import { nanoid } from 'nanoid';

function App() {
	const TasksData = [
		{ id: nanoid(), text: 'This is a test task', status: false },
		{ id: nanoid(), text: 'Meet Mai tomorrow', status: false },
	];

	const [tasks, setTasks] = useState(TasksData);
	const [newTaskText, setNewTaskText] = useState('');
	const [theme, setTheme] = useState('theme-1');

	console.log(tasks);

	const chLimit = 25;

	useEffect(() => {
		const getNewTasks = JSON.parse(localStorage.getItem('todo-app-tasks'));
		if (getNewTasks) {
			setTasks(getNewTasks);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('todo-app-tasks', JSON.stringify(tasks));
	}, [tasks]);

	// Add new task
	const addTask = (task) => {
		const newTasks = [...tasks, { id: nanoid(), text: task, status: false }];
		if (newTaskText.length <= chLimit) {
			if (newTaskText.trim().length > 0) {
				setTasks(newTasks);
				setNewTaskText('');
			}
		}
	};

	// Delete task
	const deleteTask = (id) => {
		const newTasks = tasks.filter((task) => {
			return task.id !== id;
		});
		setTasks(newTasks);
	};

	const completeTask = (id, st) => {
		let newTasks = [...tasks];
		let indexOfTask = newTasks.findIndex((task) => task.id === id);
		newTasks[indexOfTask] = {
			...newTasks[indexOfTask],
			status: !st,
		};
		setTasks(newTasks);
	};

	useEffect(() => {
		const newTheme = JSON.parse(localStorage.getItem('app-theme'));
		if (newTheme) {
			setTheme(newTheme);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('app-theme', JSON.stringify(theme));
	}, [theme]);

	const changeTheme = (theme) => {
		setTheme(theme);
	};

	return (
		<div className='App'>
			<div className='app-holder'>
				<div className={`app-screen ${theme}`}>
					<Header />
					<Sidebar changeTheme={changeTheme} />

					<div className='todo-list'>
						<TasksList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />

						<NewTask chLimit={chLimit} newTaskText={newTaskText} setNewTaskText={setNewTaskText} addTask={addTask} />
					</div>

					<h4 style={{ textAlign: 'center', paddingTop: '1rem', paddingBottom: '0.5rem', marginBottom: '0' }}>Completed Tasks</h4>
					<CompletedTasks tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
				</div>
			</div>
		</div>
	);
}

export default App;
