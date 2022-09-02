import { useStore } from '../store';

export const InfoBox = () => {
	const store = useStore((state) => state);
	return (
		<>
			<h2>Another Component</h2>
			<p>{store.message}</p>
		</>
	);
};