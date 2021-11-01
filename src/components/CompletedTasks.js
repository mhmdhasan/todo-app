import Task from './Task';

const CompletedTasks = ({ tasks, deleteTask, completeTask }) => {
	const tasksCompleted = tasks.filter((task) => {
		return task.status === true;
	});

	if (tasksCompleted.length <= 0) return <p className='app-message'>There's no completed items</p>;

	return tasksCompleted.map((task) => {
		return <Task completeTask={completeTask} status={task.status} taskId={task.id} text={task.text} deleteTask={deleteTask} key={task.id} />;
	});
};

export default CompletedTasks;
