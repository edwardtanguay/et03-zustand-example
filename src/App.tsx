import { useState } from 'react';
import './App.scss'

function App() {
	const [message, setMessage] = useState('nnn2222');
	return (
		<div className="App">
		<h1>Zustand Example</h1>
			<p>message: {message}</p>
		</div>
	)
}

export default App
