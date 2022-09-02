import { useState } from 'react';
import './App.scss'

function App() {
	const [message, setMessage] = useState('');
	return (
		<div className="App">
		<h1>Zustand Example</h1>

			<main>
				<section className="controlArea">

					<div className="data">
					<label>Message:</label>
						<input type="text"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>

				</section>

			</main>
			<p>message: {message}</p>
		</div>
	)
}

export default App
