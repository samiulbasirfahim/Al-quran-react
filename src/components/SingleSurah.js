import React from "react"
import { useNavigate } from "react-router-dom"

const SingleSurah = ({
	singleSurah: { englishName, name, numberOfAyahs, revelationType,number },
}) => {
	const navigate = useNavigate()
	return (
		<div  className="cursor-pointer border-pink-500 border-2 rounded-lg w-full py-2 grid justify-items-center bg-yellow-100 px-2 md:px-8 md:py-8">
			<p className="flex justify-between w-full">
				<span className="text-md md:text-2xl font-semibold my-4 font-sans hover:text-pink-500">Name: {name} </span> <span className="text-md md:text-2xl font-semibold my-4 font-sans hover:text-pink-500">Name: {englishName} </span>
			</p>
			<p className="flex justify-between w-full">
				<span className="text-sm md:text-xl font-semibold my-4 font-mono hover:text-pink-500">Reveal in: {revelationType}</span>{" "}
				<span className="text-sm md:text-xl font-semibold my-4 font-mono hover:text-pink-500">Ayah's: {numberOfAyahs}</span>
			</p>
			<div>
			<button className="border-pink-50 rounded-md px-2 py-1 bg-cyan-50 border-2 font-bold hover:text-pink-500" onClick={()=> alert('done')}>Add to favourite</button>
			<button className="border-pink-50 rounded-md px-2 py-1 bg-cyan-50 border-2 font-bold hover:text-pink-500" onClick={() => navigate('/surah/'+number)}>Read full surah</button>
			</div>
		</div>
	)
}

export default SingleSurah
