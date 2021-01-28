import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
	return (
		<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
			<G fill="#231F20">
				<Path d="M313.9 376.7c41.3-68.5 93.5-164.8 93.5-214.3C407.4 78.9 339.5 11 256 11S104.6 78.9 104.6 162.4c0 49.5 52.2 145.8 93.5 214.3-49 3.7-160.5 17-160.5 61.1 0 43.4 113.2 63.2 218.5 63.2 105.2 0 218.5-19.8 218.5-63.2-.1-44.1-111.7-57.4-160.7-61.1zM125.5 162.4c0-72 58.6-130.6 130.5-130.6 72 0 130.6 58.6 130.6 130.6 0 62.9-100.2 220.7-130.6 267.1-30.4-46.4-130.5-204.2-130.5-267.1zM256 480.1c-127.9 0-197.6-28-197.6-42.4 0-11.1 46-35 152-41.1 19.9 32.1 35 54.8 37 57.5 2.7 3.6 10.6 7.9 17.3 0 2.1-2.5 17.1-25.4 37-57.5 106 6.1 152 29.9 152 41.1-.1 14.5-69.8 42.4-197.7 42.4z" />
				<Path d="M321.9 162.4c0-36.4-29.5-65.9-65.9-65.9-36.4 0-65.9 29.5-65.9 65.9 0 36.4 29.5 65.9 65.9 65.9 36.4 0 65.9-29.5 65.9-65.9zm-111 0c0-24.9 20.2-45.1 45.1-45.1s45.1 20.2 45.1 45.1c0 24.9-20.2 45.1-45.1 45.1s-45.1-20.2-45.1-45.1z" />
			</G>
		</Svg>
	)
}

export default SvgComponent
