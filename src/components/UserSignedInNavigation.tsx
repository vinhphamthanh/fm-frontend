const UserSignedInNavigation = () => {
	return (
		<div className="w-auto d-flex flex-column col-12 col-md-8 flex-md-row align-items-center justify-content-between gap-3 py-2 py-md-0">
			<div className="flex-grow-1 text-truncate">
				vinh.phamthanh16@gmail.com
			</div>
			<div className="d-flex gap-3 w-100 w-lg-50">
				<button className="w-100 btn btn-outline-primary">Share a movie</button>
				<button className="w-100 btn btn-outline-secondary">Logout</button>
			</div>
		</div>
	);
};

export default UserSignedInNavigation;
