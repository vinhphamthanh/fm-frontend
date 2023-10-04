import React, { useReducer } from 'react';
import { EMAIL_REGEX } from '../constants';
import { UserAuthInterface } from '../types/AuthInterface';

interface Props {
	onSubmit: (data: UserAuthInterface) => void;
}

enum AuthActionType {
	EMAIL = 'email',
	PASSWORD = 'password',
}

interface Field {
	holder: string,
	name: string,
	type: string,
	action: AuthActionType,
}

const AUTH_FIELDS: {
	[key: string]: Field
} = {
	EMAIL: {
		holder: 'Email...',
		name: 'email',
		type: 'email',
		action: AuthActionType.EMAIL,
	},
	PASSWORD: {
		holder: 'Password...',
		name: 'password',
		type: 'password',
		action: AuthActionType.PASSWORD,
	},
};

interface AuthState {
	[key: string]: string,
}

interface Action {
	type: AuthActionType,
	payload: string
}

const authReducer = (state: AuthState, action: Action) => {
	const { type, payload } = action;
	switch (type) {
		case AuthActionType.EMAIL:
			return {
				...state,
				[AUTH_FIELDS.EMAIL.name]: payload,
			};
		case AuthActionType.PASSWORD:
			return {
				...state,
				[AUTH_FIELDS.PASSWORD.name]: payload,
			};
	}
};

const AuthForm = ({ onSubmit }: Props) => {
	const initState = {
		[AUTH_FIELDS.EMAIL.name]: '',
		[AUTH_FIELDS.PASSWORD.name]: '',
	};

	const [authState, dispatch] = useReducer(authReducer, initState);

	const changeHandler = (actionType: AuthActionType) => (event: React.FormEvent<HTMLInputElement>) => {
		const { target } = event;
		dispatch({
			type: actionType,
			payload: (target as HTMLInputElement).value,
		});
	};

	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		// @ts-ignore
		onSubmit(authState);
	};

	const disabledSubmission = !EMAIL_REGEX.test(authState.email);

	return (
		<form className="d-flex flex-column flex-md-row align-items-center gap-3 py-2 py-sm-0" onSubmit={submitHandler}>
			{Object.keys(AUTH_FIELDS).map(field => (
				<input
					key={field}
					className="form-control"
					placeholder={AUTH_FIELDS[field].holder}
					type={AUTH_FIELDS[field].type}
					name={AUTH_FIELDS[field].name}
					onChange={changeHandler(AUTH_FIELDS[field].action)}
				/>
			))}
			<button
				disabled={disabledSubmission}
				type="submit"
				className="btn btn-outline-primary w-100"
			>Login / Register</button>
		</form>
	);
};

export default AuthForm;
