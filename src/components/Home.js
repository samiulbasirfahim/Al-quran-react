import React, { useEffect, useState } from "react"
import { useSurah } from "../hooks/hooks"
import SingleSurah from "./SingleSurah"
import Spinner from "./Spinner"

const Home = () => {
	const [surah, setSurah] = useSurah()
	const [spinner, setSpinner] = useState(false)
	useEffect(() => {
		setSpinner(true)
		fetch("http://api.alquran.cloud/v1/surah")
			.then((response) => response.json())
			.then((data) => {
				setSurah(data.data)
				setSpinner(false)
			})
	}, [])

	return (
		<>
			{spinner ? (
				<Spinner></Spinner>
			) : (
				<div className="grid grid-cols-1 justify-items-center w-full gap-y-12 px-6 md:px-20">
					{surah.map((singleSurah) => (
						<SingleSurah
							key={singleSurah.number}
							singleSurah={singleSurah}
						/>
					))}
				</div>
			)}
		</>
	)
}

export default Home
