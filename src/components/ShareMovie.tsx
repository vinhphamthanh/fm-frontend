import React, {
	useEffect,
	useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { shareMovie } from '../api/movie';
import { YOUTUBE_WATCH_URL } from '../constants';
import useAuthStore from '../store/auth';
import { extractYoutubeId } from '../utils/url';

const ShareMovie = () => {
	const { email } = useAuthStore();
	const navigate = useNavigate();
	const [url, setUrl] = useState('');
	const [errorText, setErrorText] = useState('');
	const [submitting, setSubmitting] = useState(false)

	useEffect(() => {
		if (!email) {
			navigate('/');
		}
	}, [email]);

	const submitHandler = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		setSubmitting(() => true)
		shareMovie({ email, youtubeId: extractYoutubeId(url) })
		.then((response) => {
			const { status, message } = response || {}

			if([200, 201].includes(status)) {
				navigate('/');
			} else {
				setErrorText(() => message)
			}
		})
		.catch(e => console.error(e.message))
		.finally(() => setSubmitting(() => false));
	};

	const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
		const { target } = event;

		setUrl(() => (target as HTMLInputElement).value);
	};

	const focusHandler = () => {
		setErrorText(() => '')
	}

	const blurHandler = () => {
		const escapeUrl = url.replace(/(.*?=).*/, '$1')
		const validUrl = YOUTUBE_WATCH_URL === escapeUrl
		if (validUrl) {
			setErrorText(() => '')
		} else {
			setErrorText(() => 'Youtube Url is invalid!');
		}
	};

	return (
		<form className="w-100 py-5 px-3 d-flex justify-content-center align-items-center" onSubmit={submitHandler}>
			<div
				className="position-relative px-3 py-4 d-flex flex-column flex-sm-row col-12 col-sm-8 share-form mx-auto border rounded-2"
			>
				<div className="legend">Share a Youtube movie</div>
				<div className="py-2 px-sm-3">Youtube URL:</div>
				<div className="col-12 col-sm-8 pe-sm-5 d-flex flex-column justify-content-center" onSubmit={submitHandler}>
					<div className="d-flex flex-column position-relative mb-4 border">
						<input
							className="form-control"
							value={url}
							onChange={changeHandler}
							onBlur={blurHandler}
							onFocus={focusHandler}
						/>
						{errorText && <div className="text-danger fs-7">{errorText}</div>}
					</div>
					<button className="w-100 btn btn-outline-primary" type="submit" disabled={!!errorText || submitting}>
						{submitting && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
						<span className="ps-2">{submitting ? 'Sharing...' : 'Share'}</span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default ShareMovie;
