import create from 'zustand';

interface IStore {
	message: string;
	setMessage: (message: string) => void;
	colors: string[];
	addColor: (color: string) => void;
}

export const useStore = create<IStore>(
	(set): IStore => ({
		message: 'test',
		setMessage: (message: string) =>
			set((state) => ({ ...state, message })),
		colors: ['blue', 'white', 'yellow', 'green', 'orange'],
		addColor: (color: string) => {
			set((state) => {
				const _state = { ...state };
				state.colors.push(color);
				return _state;
			});
		},
	})
);
