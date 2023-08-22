import React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

// layouts
import { RootLayout, DashboardLayout } from './layouts';

import { Home, Dashboard, PageNotFound } from './pages';
import Registration from './pages/Registration';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="dashboard" element={<DashboardLayout />}>
				<Route index element={<Dashboard />} />
			</Route>
			<Route path="/registration" element={<Registration/>} />
			<Route path="*" element={<PageNotFound />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
