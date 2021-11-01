import Task from './Task';

const TasksList = ({ tasks, deleteTask, completeTask }) => {
	const uncompletedTask = tasks.filter((task) => task.status === false);
	return uncompletedTask.map((task) => {
		return <Task completeTask={completeTask} status={task.status} taskId={task.id} text={task.text} deleteTask={deleteTask} key={task.id} />;
	});
};

export default TasksList;
