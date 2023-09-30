import React from 'react';
import NavigationBar from './NavigationBar';

interface Props {
	children: React.ReactElement;
}

const Layout = (props: Props) => {
	return (
		<div className="d-flex flex-column min-vw-100 min-vh-100 overflow-auto">
			<NavigationBar />
			{props.children}
		</div>
	);
};

export default Layout;
