import axios from 'axios';
import { useEffect } from 'react';
import useVideosStore from '../store/videos';
import VideoItem from './VideoItem';

const VideoList = () => {
	const { videos, setVideos } = useVideosStore();

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const response = await axios.get('http://localhost:4000/');

				if ([200, 201].includes(response.status)) {
					const { data } = response || {};
					setVideos(data);
				}
			} catch (e) {
				console.error(e);
			}
		};

		fetchVideos().then(() => {});
	}, [setVideos]);

	return (
		<div className="d-flex flex-column col-12 py-4 col-md-10 col-lg-8 mx-auto row-gap-2 row-gap-md-3">
			{videos.map(item => <VideoItem key={item.id} item={item} />)}
		</div>
	);
};

export default VideoList;
