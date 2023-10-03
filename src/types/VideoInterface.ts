export interface VideoInterface {
	id: string;
	title: string;
	youtubeId: string;
	email: string;
	likes: string[];
	dislikes: string[];
	description: string;
}

export interface VideosStore {
	videos: VideoInterface[];
	setVideos: (payload: VideoInterface[]) => void;
}