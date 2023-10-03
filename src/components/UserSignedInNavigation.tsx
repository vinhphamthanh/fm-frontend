import { Link } from 'react-router-dom'

interface Props {
	email: string;
	logout: () => void;
}

const UserSignedInNavigation = ({ email, logout }: Props) => {
	return (
		<div className="d-flex flex-column col-12 col-md-8 flex-md-row align-items-center justify-content-end gap-3 py-2 py-md-0">
			<div className="text-truncate">
				Welcome {email}
			</div>
			<div className="d-flex gap-3 w-lg-50">
				<Link to="/share" className="px-4 btn btn-outline-primary">Share a movie</Link>
				<button className="px-4 btn btn-outline-secondary" onClick={logout}>Logout</button>
			</div>
		</div>
	);
};

export default UserSignedInNavigation;
