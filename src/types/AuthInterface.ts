export interface AuthInterface {
	email: string;
	isAuthenticated: boolean;
}

export interface AuthStore extends AuthInterface {
	setAuth: (payload: AuthInterface) => void
}

export interface UserAuthInterface {
	email: string;
	password: string;
}
