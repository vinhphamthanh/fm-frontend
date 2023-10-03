import React, {
	useEffect,
	useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { shareMovie } from '../api/movie';
import useAuthStore from '../store/auth';
import { extractYoutubeId } from '../utils/url';

const ShareMovie = () => {
	const { email } = useAuthStore();
	const navigate = useNavigate();
	const [url, setUrl] = useState('');

	useEffect(() => {
		if (!email) {
			navigate('/');
		}
	}, [email]);

	const submitHandler = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		shareMovie({ email, youtubeId: extractYoutubeId(url) })
		.then(() => navigate('/'))
		.catch(e => console.error(e.message));
	};

	const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		const { target } = event;
		setUrl(() => (target as HTMLInputElement).value);
	};

	return (
		<form className="w-100 py-5 px-3 d-flex justify-content-center align-items-center" onSubmit={submitHandler}>
			<div
				className="position-relative px-3 py-4 d-flex flex-column flex-sm-row col-12 col-sm-8 share-form mx-auto border rounded-2"
			>
				<div className="legend">Share a Youtube movie</div>
				<div className="py-2 px-sm-3">Youtube URL:</div>
				<div className="col-12 col-sm-8 pe-sm-5" onSubmit={submitHandler}>
					<input className="form-control mb-4" value={url} onChange={changeHandler} />
					<button type="submit" className="w-100 btn btn-outline-primary">Share</button>
				</div>
			</div>
		</form>
	);
};

export default ShareMovie;
