import React from "react";
import "./App.css";
import NumberContext from "./contexts/NumberContext";
import NumberProvider from "./components/NumberProvider";

function App() {
	return (
		<NumberProvider>
			<div className="App">
				<NumberContext.Consumer>
					{({ number, updateNumber }) => (
						<div>
							<h2>{number}</h2>
							<button onClick={updateNumber}>Update Number</button>
						</div>
					)}
				</NumberContext.Consumer>
			</div>
		</NumberProvider>
	);
}

export default App;
