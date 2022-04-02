import { Route, Routes } from "react-router-dom"
import Favourite from "./components/Favourite"
import Header from "./components/Header"
import Home from "./components/Home"
import Surah from "./components/Surah"

function App() {
	return (
		<div className="App flex">
			<div>
				<Header></Header>
			</div>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/surah/:id" element={<Surah></Surah>}></Route>
				<Route path="/favourite" element={<Favourite />}></Route>
			</Routes>
		</div>
	)
}

export default App
