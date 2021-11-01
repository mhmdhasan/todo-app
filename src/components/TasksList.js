import Task from './Task';

const TasksList = ({ tasks, deleteTask }) => {
	return tasks.map((task) => {
		return <Task status={task.status} taskId={task.id} text={task.text} deleteTask={deleteTask} key={task.id} />;
	});
};

export default TasksList;
