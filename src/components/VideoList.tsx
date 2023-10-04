import { useEffect } from 'react';
import { fetchMovie } from '../api/movie';
import useVideosStore from '../store/videos';
import VideoItem from './VideoItem';

const VideoList = () => {
	const { videos, setVideos } = useVideosStore();

	useEffect(() => {
		fetchMovie().then(data => setVideos(data)).catch(e => console.error(e));
	}, [setVideos]);

	return (
		<div className="d-flex flex-column col-12 py-4 col-md-10 col-lg-8 mx-auto row-gap-2 row-gap-md-3">
			{videos.map(item => <VideoItem key={item.id} item={item} />)}
		</div>
	);
};

export default VideoList;
