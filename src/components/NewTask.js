import { AiFillCheckCircle } from 'react-icons/ai';

const NewTask = ({ newTaskText, setNewTaskText, addTask, chLimit }) => {
	const handleChange = (e) => {
		if (chLimit - e.target.value.length >= 0) {
			setNewTaskText(e.target.value);
		}
	};

	return (
		<div className='new-item'>
			<input cols='30' rows='1' placeholder='Add new task...' value={newTaskText} onChange={handleChange} />
			<button className='save' onClick={() => addTask(newTaskText)}>
				<AiFillCheckCircle size='1.1rem' />
			</button>
			<div className='character-limit'>{chLimit - newTaskText.length}</div>
		</div>
	);
};

export default NewTask;
