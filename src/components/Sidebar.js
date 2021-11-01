import { useEffect } from 'react';
import { FaCog } from 'react-icons/fa';

const Sidebar = ({ changeTheme, setThemeColor }) => {
	useEffect(() => {
		document.querySelector('.toggle-setting').addEventListener('click', function () {
			document.querySelector('.setting').classList.toggle('show');
		});
	}, []);

	useEffect(() => {
		document.querySelectorAll('.setting-theme').forEach((el) => {
			el.addEventListener('click', () => {
				document.querySelector('#themeColor').setAttribute('content', el.dataset.maincolor);
			});
		});
	}, [changeTheme]);

	return (
		<div className='setting'>
			<div className='setting-inner'>
				<p className='setting-header'>Choose theme</p>
				<div className='theme-options'>
					<span
						onClick={(e) => {
							changeTheme(e.target.dataset.theme);
							setThemeColor(e.target.dataset.maincolor);
						}}
						className='setting-theme theme-1'
						data-theme='theme-1'
						data-maincolor='#48b1bf'
					></span>
					<span
						onClick={(e) => {
							changeTheme(e.target.dataset.theme);
							setThemeColor(e.target.dataset.maincolor);
						}}
						className='setting-theme theme-2'
						data-theme='theme-2'
						data-maincolor='#8ca6db'
					></span>
					<span
						onClick={(e) => {
							changeTheme(e.target.dataset.theme);
							setThemeColor(e.target.dataset.maincolor);
						}}
						className='setting-theme theme-3'
						data-theme='theme-3'
						data-maincolor='#fe977b'
					></span>
					<span
						onClick={(e) => {
							changeTheme(e.target.dataset.theme);
							setThemeColor(e.target.dataset.maincolor);
						}}
						className='setting-theme theme-4'
						data-theme='theme-4'
						data-maincolor='#e35d5b'
					></span>
					<span
						onClick={(e) => {
							changeTheme(e.target.dataset.theme);
							setThemeColor(e.target.dataset.maincolor);
						}}
						className='setting-theme theme-5'
						data-theme='theme-5'
						data-maincolor='#8dc26f'
					></span>
				</div>
			</div>
			<button className='toggle-setting'>
				<FaCog size='1rem' />
			</button>
		</div>
	);
};

export default Sidebar;
