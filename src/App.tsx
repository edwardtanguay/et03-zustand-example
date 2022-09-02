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
