import create from 'zustand';
import axios from 'axios';

const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

export interface ITechBook {
	idCode: string;
	title: string;
	description: string;
	language: string;
}

interface IStore {
	message: string;
	setMessage: (message: string) => void;
	colors: string[];
	addColor: (color: string) => void;
	deleteLastColor: () => void;
	deleteAllColors: () => void;
	deleteRedAndVowels: () => void;
	currentUserState: {
		isLoggedIn: boolean;
		emailIsConfirmed: boolean;
	};
	logUserIn: () => void;
	logUserOut: () => void;
	techBooks: ITechBook[];
	loadTechBooks: () => void;
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
		deleteRedAndVowels: () => {
			set((state) => {
				const _state = { ...state };
				_state.message = _state.message.replace(/[aeiou]/gi, '');
				_state.colors = _state.colors.filter((m) => m !== 'red');
				return _state;
			});
		},
		currentUserState: {
			isLoggedIn: false,
			emailIsConfirmed: false,
		},
		logUserIn: () => {
			set((state) => {
				const _state = { ...state };
				_state.currentUserState.isLoggedIn = true;
				return _state;
			});
		},
		logUserOut: () => {
			set((state) => {
				const _state = { ...state };
				_state.currentUserState.isLoggedIn = false;
				return _state;
			});
		},
		techBooks: [],
		loadTechBooks: async () => {
			const rawTechBooks = (await axios.get(techBooksUrl)).data;
			console.log(rawTechBooks);
			const _techBooks: ITechBook[] = [];
			rawTechBooks.forEach((rawTechBook: any) => {
				const techBook: ITechBook = {
					title: rawTechBook.title,
					description: rawTechBook.description,
					language:
						rawTechBook.language === ''
							? 'english'
							: rawTechBook.language,
					idCode: rawTechBook.idCode,
				};
				_techBooks.push(techBook);
			});
			set((state) => {
				const _state = { ...state };
				_state.techBooks = _techBooks;
				return _state;
			});
		},
	})
);
