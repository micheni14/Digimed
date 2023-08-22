import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
	return (
		<div>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default DashboardLayout;
