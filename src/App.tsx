import { useStore } from './store';
import './App.scss';
import { InfoBox } from './components/InfoBox';

function App() {
	const store = useStore((state) => state);

	return (
		<div className="App">
			<h1>Zustand Example</h1>

			<main>
				<section className="controlArea">

					<div className="data">
						<label>Message:</label>
						<input
							type="text"
							value={store.message}
							onChange={(e) => store.setMessage(e.target.value)}
						/>
					</div>

					<div className="data">
						<label>Colors:</label>
						<button onClick={() => store.addColor('blue')}>
							blue
						</button>
						<button onClick={() => store.addColor('red')}>
							red
						</button>
						<button onClick={() => store.addColor('yellow')}>
							yellow
						</button>
						<button onClick={() => store.deleteLastColor()}>delete last color</button>
						<button onClick={() => store.deleteAllColors()}>delete all colors</button>
					</div>

					<div className="data">
						<label>Change numerous state variables:</label>
						<button onClick={() => store.deleteRedAndVowels()}>delete color "red" and all vowels</button>
					</div>

					<div className="data">
						<label>User panel:</label>
						<button onClick={() => store.logUserIn()}> Login</button>
						<button onClick={() => store.logUserOut()}> Logout</button>
					</div>

					<div className="data">
						<label>TechBooks</label>
						<button onClick={() => store.loadTechBooks()}>load tech books</button>
					</div>

				</section>
				<section className="dataArea">
					<InfoBox />
				</section>
			</main>
		</div>
	);
}

export default App;
