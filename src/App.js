import { useState, useEffect } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import NewTask from './components/NewTask';
import { nanoid } from 'nanoid';

function App() {
	const TasksData = [
		{ id: nanoid(), text: 'This is a test task', status: false },
		{ id: nanoid(), text: 'Meet Mai tomorrow', status: false },
	];

	const [tasks, setTasks] = useState(TasksData);
	const [newTaskText, setNewTaskText] = useState('');

	const chLimit = 25;

	// Add new task
	const addTask = (task) => {
		const newTasks = [...tasks, { id: nanoid(), text: task }];
		if (newTaskText.length <= chLimit) {
			setTasks(newTasks);
			setNewTaskText('');
		}
	};

	// Delete task
	const deleteTask = (id) => {
		const newTasks = tasks.filter((task) => {
			return task.id !== id;
		});
		setTasks(newTasks);
	};

	return (
		<div className='App'>
			<div className='app-holder'>
				<div className='app-screen'>
					<Header />

					<div className='todo-list'>
						<TasksList tasks={tasks} deleteTask={deleteTask} />

						<NewTask chLimit={chLimit} newTaskText={newTaskText} setNewTaskText={setNewTaskText} addTask={addTask} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
