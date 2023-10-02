import { VideoInterface } from '../types/VideoInterface';

interface Props {
	item: VideoInterface;
}

const VideoItem = ({ item }: Props) => {
	const { id, title, videoUrl, likes, dislikes, email, description } = item;

	return (
		<div className="w-100 d-flex flex-column flex-md-row justify-content-between">
				<div className="col-12 col-md-6 px-3 px-md-0">
					<div className="video-wrapper">
						<iframe
							width="100px"
							height="50px"
							src={videoUrl}
							allowFullScreen
							allowTransparency
						></iframe>
					</div>
				</div>
				<div className="d-flex flex-column col-12 col-md-6 px-3 pt-3 pt-md-0">
					<div className="text-danger fw-bold text-truncate">
						{title}
					</div>
					<div className="">
						Shared by: {email}
					</div>
					<div className="d-flex gap-3">
						<div className="d-flex align-items-center gap-1">
							<span>{likes.length}</span><i className="i bi-hand-thumbs-up"></i>
						</div>
						<div className="d-flex align-items-center gap-1">
							<span>{dislikes.length}</span><i className="i bi-hand-thumbs-down"></i>
						</div>
					</div>
					<p>Description:</p>
					<div className="w-100 h-50">
						<p className="fw-bold video-description">{description}</p>
					</div>
				</div>
			</div>
	)
}

export default VideoItem
