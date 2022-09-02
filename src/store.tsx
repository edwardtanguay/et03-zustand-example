import create from 'zustand';

interface IStore {
	message: string;
	setMessage: (message: string) => void;
	colors: string[];
	addColor: (color: string) => void;
	deleteLastColor: () => void;
	deleteAllColors: () => void;
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
		deleteLastColor: () => {
			set((state) => {
				const _state = { ...state };
				_state.colors.pop();
				return _state;
			});
		},
		deleteAllColors: () => {
			set((state) => {
				const _state = { ...state };
				_state.colors = [];
				return _state;
			});
		},
	})
);
