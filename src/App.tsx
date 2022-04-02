import React from "react";
import "./App.scss";
import Container from "./components/CalculatorContainer/container.component";

function App() {
	const [theme, setTheme] = React.useState<number>(1);
	return (
		<main className="App" id={"theme" + theme}>
			<Container theme={theme} setTheme={setTheme} />
		</main>
	);
}

export default App;
