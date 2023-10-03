import { create } from 'zustand';
import {
	createJSONStorage,
	persist,
} from 'zustand/middleware';

import { VideoInterface, VideosStore } from '../types/VideoInterface';

const useVideosStore = create<VideosStore>()(
	persist(
		(set, get) => ({
			videos: [],
			setVideos: (videos: VideoInterface[]) => set({ videos }),
		}),
		{
			name: 'funny-movies-auth',
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);

export default useVideosStore;