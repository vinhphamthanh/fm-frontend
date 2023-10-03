import { create } from 'zustand';
import {
	createJSONStorage,
	persist,
} from 'zustand/middleware';
import {
	AuthInterface,
	AuthStore,
} from '../types/AuthInterface';

const useAuthStore = create<AuthStore>()(
	persist(
		(set, get) => ({
			email: '',
			isAuthenticated: false,
			setAuth: (payload: AuthInterface) => set({
				email: payload.email,
				isAuthenticated: payload.isAuthenticated,
			}),
		}),
		{
			name: 'funny-movies-auth',
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);

export default useAuthStore;