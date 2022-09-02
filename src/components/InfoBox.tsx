import { useStore, ITechBook } from '../store';

export const InfoBox = () => {
	const store = useStore((state) => state);
	return (
		<div className="infoBox">
			<h2>Another Component</h2>
			<div className="row">
				<label>Message:</label>
				<span className="theValue">{store.message}</span>
			</div>
			<div className="row">
				<label>Colors:</label>
				<span className="theValue">{store.colors.join(', ')}</span>
			</div>
			<div className="row">
				<label>User is online:</label>
				<span className="theValue">
					{store.currentUserState.isLoggedIn ? 'YES' : 'no'}
				</span>
			</div>
			<div className="row">
				<label>User's email is confirmed:</label>
				<span className="theValue">
					{store.currentUserState.emailIsConfirmed ? 'YES' : 'no'}
				</span>
			</div>
			<div className="row">
				<label>Tech Books:</label>
				<span className="theValue">
					{store.techBooks.map((techBook: ITechBook, i) => {
						return (
							<li key={i}>{techBook.title}</li>
					)
				})}
				</span>
			</div>
		</div>
	);
};
