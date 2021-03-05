import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [data, updateData] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const res = await axios.get("/api");
      console.log(res);
			updateData(res.data.message);
		}
		fetchData();
	}, []);
	return (
		<div className='App'>
			<header className='App-header' style={{'color': 'yellow'}}>
        Hello from React
        <p style={{'color': 'green'}}> {!data ? 'Loading...' : data}</p>
        </header>
		</div>
	);
}

export default App;
