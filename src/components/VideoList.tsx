import MockList from './mock-videos'
import VideoItem from './VideoItem';

const VideoList = () => {
	return (
		<div className="d-flex flex-column col-12 py-4 col-md-10 col-lg-8 mx-auto">
			{MockList.map(item => <VideoItem key={item.id} item={item} />)}
		</div>
	)
}

export default VideoList
