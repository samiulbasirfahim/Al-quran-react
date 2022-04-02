import React from "react"

const SingleSurah = ({
	singleSurah: { englishName, name, numberOfAyahs, revelationType },
}) => {
	return (
		<div className="cursor-pointer border-pink-500 border-2 rounded-lg w-full py-2 grid justify-items-center bg-yellow-100 px-2 md:px-8 md:py-8">
			<p className="flex justify-between w-full">
				<span className="text-2xl font-semibold my-4 font-sans">Name: {name} </span> <span className="text-2xl font-semibold my-4 font-sans">Name: {englishName} </span>
			</p>
			<p className="flex justify-between w-full">
				<span className="text-xl font-semibold my-4 font-mono">Reveal in: {revelationType}</span>{" "}
				<span className="text-xl font-semibold my-4 font-mono">Ayah's: {numberOfAyahs}</span>
			</p>
		</div>
	)
}

export default SingleSurah
