import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "./Spinner"

const Surah = () => {
	const { id } = useParams()
	const [sura, setSura] = useState([])
	const [spinner, setSpinner] = useState(false)
	useEffect(() => {
		setSpinner(true)
		fetch("http://api.alquran.cloud/v1/surah/114")
			.then((res) => res.json())
			.then((data) => {
				setSura(data.data)
				setSpinner(false)
			})
	}, [])
    const [ayahs, setAyahs] = useState([])
	useEffect(() => {
        if(sura.length != 0 ){
            setAyahs(sura.ayahs)
        }
        console.log(ayahs);
    },[])
	return (
		<>
			{spinner ? (
				<Spinner></Spinner>
			) : (
				<div className="flex flex-col items-center w-full">
					<p className="font-bold text-2xl text-center w-full my-4">
						{sura.name}
					</p>
					<p className="font-bold text-2xl text-center w-full my-4">
						Sura: {sura.englishName}
					</p>
					<p className="font-bold text-2xl text-center w-full text-gray-600 my-4">
						بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ,
					</p>

                   {}
				</div>
			)}
		</>
	)
}

export default Surah
