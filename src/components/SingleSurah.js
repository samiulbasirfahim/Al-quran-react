import React from "react"
import { useNavigate } from "react-router-dom"

const SingleSurah = ({
	singleSurah: { englishName, name, numberOfAyahs, revelationType },
}) => {
	const navigate = useNavigate()
	return (
		<div  onClick={() => navigate('/surah/'+englishName)} className="cursor-pointer border-pink-500 border-2 rounded-lg w-full py-2 grid justify-items-center bg-yellow-100 px-2 md:px-8 md:py-8">
			<p className="flex justify-between w-full">
				<span className="text-md md:text-2xl font-semibold my-4 font-sans">Name: {name} </span> <span className="text-md md:text-2xl font-semibold my-4 font-sans">Name: {englishName} </span>
			</p>
			<p className="flex justify-between w-full">
				<span className="text-sm md:text-xl font-semibold my-4 font-mono">Reveal in: {revelationType}</span>{" "}
				<span className="text-sm md:text-xl font-semibold my-4 font-mono">Ayah's: {numberOfAyahs}</span>
			</p>
			<button className="border-pink-50 rounded-md px-2 py-1 bg-cyan-50 border-2 font-bold" onClick={()=> alert('done')}>Add to favourite</button>
		</div>
	)
}

export default SingleSurah
