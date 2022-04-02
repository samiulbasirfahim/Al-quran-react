import React from "react"
import "./style.scss"

const Spinner = () => {
	return (
		<div className="compo flex justify-center items-center w-[100vh] h-[100vh]">
			<div className="boxes">
				<div className="box">
					<div className="compo"></div>
					<div className="compo"></div>
					<div className="compo"></div>
					<div className="compo"></div>
				</div>
				<div className="box">
					<div className="compo"></div>
					<div className="compo"></div>
					<div className="compo"></div>
					<div className="compo"></div>
				</div>
				<div className="box">
					<div className="compo"></div>
					<div className="compo"></div>
					<div className="compo"></div>
					<div className="compo"></div>
				</div>
				<div className="box">
					<div className="compo"></div>
					<div className="compo"></div>
					<div className="compo"></div>
					<div className="compo"></div>
				</div>
			</div>

			<a
				className="dribbble"
				href="https://dribbble.com/shots/5533600-Loading-boxes"
				target="_blank"
			>
				<img
					src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
					alt=""
				/>
			</a>
		</div>
	)
}

export default Spinner
