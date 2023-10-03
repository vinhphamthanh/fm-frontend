import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
	UserAuthInterface,
} from '../types/AuthInterface';
import AuthForm from './AuthForm';
import UserSignedInNavigation from './UserSignedInNavigation';
import useAuthStore from '../store/auth';

const NavigationBar = () => {
	const { setAuth, isAuthenticated, email } = useAuthStore()
	const toast = useRef<HTMLElement|null>(null)

	useEffect(() => {
		toast.current = document.getElementById('liveToast')
	}, []);

	const submitHandler = async (data: UserAuthInterface) => {
		try {
			const response: AxiosResponse = await axios.post('http://localhost:4000/login', data);
			if ([200, 201].includes(response.status)) {
				setAuth(response.data)
			}
		} catch (e) {
			console.error(e)
		}
	};

	const logoutHandler = () => {
		setAuth({ email: '', isAuthenticated: false })
	}

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
			{isAuthenticated ? <UserSignedInNavigation email={email} logout={logoutHandler} /> : <AuthForm onSubmit={submitHandler} />}
			</div>
	);
};

export default NavigationBar;
