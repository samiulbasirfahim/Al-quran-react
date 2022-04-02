import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {
	return (
		<div className="App flex justify-between">
			<div>
				<Header></Header>
			</div>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
			</Routes>
		</div>
	)
}

export default App
