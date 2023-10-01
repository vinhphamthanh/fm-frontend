import React from 'react';

const ShareMovie = () => {
	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault()
	}

	return (
		<form className="w-100 py-5 px-3 d-flex justify-content-center align-items-center" onSubmit={submitHandler}>
			<div className="position-relative px-3 py-4 d-flex flex-column flex-sm-row col-12 col-sm-8 share-form mx-auto border rounded-2">
				<div className="legend">Share a Youtube movie</div>
				<div className="py-2 px-sm-3">Youtube URL:</div>
				<div className="col-12 col-sm-8 pe-sm-5">
					<input className="form-control mb-4" />
					<button className="w-100 btn btn-outline-primary">Share</button>
				</div>
			</div>
		</form>
	)
}

export default ShareMovie
