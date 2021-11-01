import { useEffect } from 'react';
import { BiCog } from 'react-icons/bi';

const Sidebar = ({ changeTheme }) => {
	useEffect(() => {
		document.querySelector('.toggle-setting').addEventListener('click', function () {
			document.querySelector('.setting').classList.toggle('show');
		});
	}, []);

	return (
		<div className='setting'>
			<div className='setting-inner'>
				<p className='setting-header'>Choose theme</p>
				<div className='theme-options'>
					<span onClick={(e) => changeTheme(e.target.dataset.theme)} className='setting-theme theme-1' data-theme='theme-1'></span>
					<span onClick={(e) => changeTheme(e.target.dataset.theme)} className='setting-theme theme-2' data-theme='theme-2'></span>
					<span onClick={(e) => changeTheme(e.target.dataset.theme)} className='setting-theme theme-3' data-theme='theme-3'></span>
					<span onClick={(e) => changeTheme(e.target.dataset.theme)} className='setting-theme theme-4' data-theme='theme-4'></span>
					<span onClick={(e) => changeTheme(e.target.dataset.theme)} className='setting-theme theme-5' data-theme='theme-5'></span>
				</div>
			</div>
			<button className='toggle-setting'>
				<BiCog />
			</button>
		</div>
	);
};

export default Sidebar;
