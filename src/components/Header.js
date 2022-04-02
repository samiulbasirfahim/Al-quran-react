import React from "react"
import { Link, NavLink } from "react-router-dom"
import { BookOpenIcon } from "@heroicons/react/solid"

const Header = () => {

    
	return (
		<div className="h-[100vh] bg-yellow-100 w-[400px] flex justify-center items-center md:sticky top-0 absolute -left-96 px-2 md:left-0">
			<nav className="w-full flex flex-col justify-evenly h-full">
				<ul>
					<Link
						className="text-6xl font-mono text-center flex flex-col items-center"
						to="/"
					>
						<BookOpenIcon width={80} className="mr-1" /> <p>Al-Quran</p>
					</Link>
				</ul>
				<ul>
					<li className="font-sans text-2xl bg-[#35b9ca]  my-8 rounded px-4 py-2 flex justify-center ">
						<NavLink
							style={({ isActive }) => {
								return {
									color: isActive ? "#e83e8c" : "",
								}
							}}
							to="/"
						>
							SURAH
						</NavLink>
					</li>
					<li className="text-2xl bg-[#35b9ca] font-sans  my-8 rounded px-4 py-2 flex justify-center">
						<NavLink
						style={({ isActive }) => {
                            return {
                                color: isActive ? "#e83e8c" : "",
                            }
                        }}
							to="/favourite"
						>
							Favourite
						</NavLink>
					</li>
					<li className="text-2xl bg-[#35b9ca] font-sans my-8 rounded px-4 py-2 flex justify-center">
						<NavLink
						style={({ isActive }) => {
								return {
									color: isActive ? "#e83e8c" : "",
								}
							}}
							to="duya"
						>
							DUYA
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
