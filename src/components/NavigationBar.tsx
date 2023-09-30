import React from 'react';
import AuthForm from './AuthForm';

const NavigationBar = () => {
	return (
		<div
			className="w-100 d-flex flex-column flex-md-row justify-content-between text-primary px-3 py-2 border border-bottom"
		>
				<div className="fs-2">
					<i className="i bi-emoji-laughing"></i>
					<span className="px-2 fw-bold">Funny Movies</span>
				</div>
				<AuthForm />
			</div>
	);
};

export default NavigationBar;
