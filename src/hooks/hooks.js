import { useState } from "react"

const useSurah = () => {
    const [surah, setSurah] = useState([])
    // useEffect(()=>{
    //     fetch('http://api.alquran.cloud/v1/surah')
    //     .then(response=> response.json())
    //     .then(data => setSurah(data.data))
    // } ,[])
    return [surah, setSurah]
}






export {useSurah}