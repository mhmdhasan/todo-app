import { useState } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsCheckLg } from 'react-icons/bs';

const Task = ({ taskId, text, status, deleteTask, completeTask }) => {
	const [taskStatus, setTaskStatus] = useState(status);

	console.log(taskStatus);

	return (
		<div className={`todo-item ${taskStatus && 'completed'}`} data-id={taskId}>
			<div
				className='todo-item-complete'
				onClick={() => {
					setTaskStatus(!taskStatus);
					completeTask(taskId, taskStatus);
				}}
			>
				<BsCheckLg className='complete-icon' size='0.5rem' />
			</div>
			<div className='todo-item-text'>{text}</div>
			<div className='todo-item-delete' onClick={() => deleteTask(taskId)}>
				<RiDeleteBin6Fill size='1rem' className='delete-icon' />
			</div>
		</div>
	);
};

export default Task;
