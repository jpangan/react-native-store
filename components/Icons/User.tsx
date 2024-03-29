import * as React from "react";
import Svg, { Path } from "react-native-svg";

function User(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-2 -2 24 24"
			width={24}
			height={24}
			preserveAspectRatio="xMinYMin"
			className="prefix__jam prefix__jam-user-circle"
			{...props}
		>
			<Path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-14a4 4 0 014 4v2a4 4 0 11-8 0V8a4 4 0 014-4zm0 2a2 2 0 00-2 2v2a2 2 0 104 0V8a2 2 0 00-2-2zM5.91 16.876a8.033 8.033 0 01-1.58-1.232 5.57 5.57 0 012.204-1.574 1 1 0 11.733 1.86c-.532.21-.993.538-1.358.946zm8.144.022a3.652 3.652 0 00-1.41-.964 1 1 0 11.712-1.868 5.65 5.65 0 012.284 1.607 8.032 8.032 0 01-1.586 1.225z" />
		</Svg>
	)
}

export default User
