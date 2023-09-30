import React from 'react';
import { Link } from 'react-router-dom'
import AuthForm from './AuthForm';

interface Props {
	children: React.ReactElement
}

const Layout = (props: Props) => {
	return (
		<div className="d-flex flex-column min-vw-100 min-vh-100 overflow-auto">
			<div className="w-100 d-flex flex-column flex-md-row justify-content-between text-primary px-3 py-2 border border-bottom">
				<div className="fs-2">
					<i className="i bi-emoji-laughing"></i>
					<span className="px-2 fw-bold">Funny Movies</span>
				</div>
				<AuthForm />
			</div>
			{props.children}
		</div>
	)
}

export default Layout
