interface IInfoBoxProps {
	message: string;
}

export const InfoBox = (props: IInfoBoxProps) => {
	const { message } =  props;
	return (
		<>
			<h2>Another Component</h2>
			<p>{message}</p>
		</>
	);
};