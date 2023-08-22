import React, { useState, useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

const RootLayout = () => {
	return (
		<div>
			<ScrollRestoration />
			<main>
				{/* <Sidebar
					width={width}
					openDrawer={openDrawer}
					setOpenDrawer={setOpenDrawer}
					activeMenu={activeMenu}
					handleDrawerToggle={handleDrawerToggle}
				/> */}
				<div className="home_content">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default RootLayout;
