import React from 'react';
import AuthForm from './AuthForm';
import UserSignedInNavigation from './UserSignedInNavigation';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
	const switching = true;

	return (
		<div
			className="w-100 d-flex flex-column flex-md-row justify-content-between text-primary px-2 py-2 border border-bottom"
		>
			<Link to="/" className="text-decoration-none">
				<div className="fs-2 flex-grow-1">
					<i className="i bi-emoji-laughing"></i>
					<span className="px-2 fw-bold">Funny Movies</span>
				</div>
			</Link>
			{switching ? <UserSignedInNavigation /> : <AuthForm />}
			</div>
	);
};

export default NavigationBar;
