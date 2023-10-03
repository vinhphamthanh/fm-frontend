import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api/auth';
import useAuthStore from '../store/auth';
import { UserAuthInterface } from '../types/AuthInterface';
import AuthForm from './AuthForm';
import UserSignedInNavigation from './UserSignedInNavigation';

const NavigationBar = () => {
	const { setAuth, isAuthenticated, email } = useAuthStore();

	const submitHandler = (data: UserAuthInterface) => {
		login(data)
		.then(data => setAuth(data))
		.catch(e => {
			console.error(e.message);
		});
	};

	const logoutHandler = () => {
		setAuth({ email: '', isAuthenticated: false });
	};

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
			{isAuthenticated ? <UserSignedInNavigation email={email} logout={logoutHandler} /> :
				<AuthForm onSubmit={submitHandler} />}
		</div>
	);
};

export default NavigationBar;
