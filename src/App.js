import { useState, useEffect } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import CompletedTasks from './components/CompletedTasks';
import NewTask from './components/NewTask';
import Sidebar from './components/Sidebar';
import { nanoid } from 'nanoid';

function App() {
	const TasksData = [
		{
			id: nanoid(),
			text: 'Matching Localization Switcher',
			status: false,
		},
		{
			id: nanoid(),
			text: 'Verify & Approval Screens',
			status: false,
		},
		{
			id: nanoid(),
			text: 'All Error pages [503 Error]',
			status: false,
		},
		{
			id: nanoid(),
			text: 'Use the new logo',
			status: false,
		},
		{
			id: nanoid(),
			text: 'Use the new bs.validation script',
			status: false,
		},
		{
			id: nanoid(),
			text: 'Use the new syle css file',
			status: false,
		},
		{
			id: nanoid(),
			text: 'This is a test completed task',
			status: true,
		},
		{
			id: nanoid(),
			text: 'A very important task',
			status: false,
		},
	];

	const [tasks, setTasks] = useState(TasksData);
	const [newTaskText, setNewTaskText] = useState('');
	const [theme, setTheme] = useState('theme-1');
	const [themeColor, setThemeColor] = useState('#48b1bf');

	console.log(tasks);

	const chLimit = 25;

	useEffect(() => {
		const newTheme = JSON.parse(localStorage.getItem('app-theme'));
		if (newTheme) {
			setTheme(newTheme);
		}

		const newThemeColor = JSON.parse(localStorage.getItem('app-theme-color'));
		if (newThemeColor) {
			setThemeColor(newThemeColor);
		}
		document.querySelector('#themeColor').setAttribute('content', newThemeColor);

		const getNewTasks = JSON.parse(localStorage.getItem('todo-app-tasks'));
		if (getNewTasks) {
			setTasks(getNewTasks);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('todo-app-tasks', JSON.stringify(tasks));
	}, [tasks]);

	useEffect(() => {
		localStorage.setItem('app-theme', JSON.stringify(theme));
	}, [theme]);

	useEffect(() => {
		localStorage.setItem('app-theme-color', JSON.stringify(themeColor));
	}, [themeColor]);

	// Add new task
	const addTask = (task) => {
		const newTasks = [
			...tasks,
			{
				id: nanoid(),
				text: task,
				status: false,
			},
		];
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

	// Complete task
	const completeTask = (id, st) => {
		// Mutate the tasks state depending on checking the task
		let newTasks = [...tasks];
		let indexOfTask = newTasks.findIndex((task) => task.id === id);
		newTasks[indexOfTask] = {
			...newTasks[indexOfTask],
			status: !st,
		};
		setTasks(newTasks);
	};

	// Change theme
	const changeTheme = (theme) => {
		setTheme(theme);
		setThemeColor(themeColor);
	};

	return (
		<div className='App'>
			<div className='app-holder'>
				<div className={`app-screen ${theme}`}>
					<Header />
					<Sidebar changeTheme={changeTheme} setThemeColor={setThemeColor} />

					<div className='todo-list'>
						<TasksList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />

						<NewTask chLimit={chLimit} newTaskText={newTaskText} setNewTaskText={setNewTaskText} addTask={addTask} />
					</div>

					<h4 className='completed-tasks-header'>Completed Tasks</h4>
					<CompletedTasks tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
				</div>
			</div>

			<div className='copyrights'>
				Made by{' '}
				<a href='https://mohamedhasan.me' target='_blank' rel='noreferrer'>
					Mohamedhasan.me
				</a>
			</div>
		</div>
	);
}

export default App;
