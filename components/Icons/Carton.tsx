import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={56}
			height={56}
			viewBox="0 0 64 64"
			fill="#000"
			{...props}
		>
			<Path d="M51.586 10.029a1.487 1.487 0 00-1.449-.607c-.021-.005-.042-.014-.063-.017L27.469 6.087a1.492 1.492 0 00-.734.076L8.63 12.799l-.023.011c-.019.008-.037.02-.057.027a1.553 1.553 0 00-.602.47c-.004.006-.01.009-.014.015L.289 23.78a1.504 1.504 0 00-.202 1.391c.167.469.556.823 1.038.947l6.634 1.713v16.401c0 .659.431 1.242 1.062 1.435l24.29 7.422c.008.004.017.001.025.005.13.036.266.059.402.06l.011.002h.001a1.5 1.5 0 00.423-.067c.044-.014.085-.033.13-.052.059-.022.117-.038.175-.068l17.43-9.673a1.5 1.5 0 00.772-1.312V25.586l5.896-2.83a1.502 1.502 0 00.579-2.214l-7.369-10.513zM27.41 9.111l17.644 2.59-11.704 5.442-18.534-3.415L27.41 9.111zM9.801 15.854l21.237 3.914-6.242 9.364-20.78-5.365 5.785-7.913zm.958 27.268V28.605l14.318 3.697a1.5 1.5 0 001.623-.62l5.349-8.023v25.968l-21.29-6.505zm38.72-2.022l-14.431 8.007V25.414l2.635 5.599a1.5 1.5 0 002.005.714l9.789-4.698.002 14.071zm-9.724-12.732l-4.207-8.938 14.302-6.65 5.634 8.037-15.729 7.551z" />
		</Svg>
	)
}

export default SvgComponent;
