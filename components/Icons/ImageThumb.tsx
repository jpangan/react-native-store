import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ImageThumb(props) {
	return (
		<Svg
			height="512pt"
			viewBox="0 -36 512 511"
			width="512pt"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path d="M231.898 198.617c28.204 0 51.153-22.945 51.153-51.148 0-28.207-22.95-51.153-51.153-51.153s-51.148 22.946-51.148 51.153c0 28.203 22.945 51.148 51.148 51.148zm0-72.3c11.665 0 21.153 9.488 21.153 21.152 0 11.66-9.488 21.148-21.153 21.148-11.66 0-21.148-9.488-21.148-21.148 0-11.664 9.488-21.153 21.148-21.153zm0 0" />
			<Path d="M493.305.5H18.695C8.387.5 0 8.887 0 19.195v401.727c0 10.308 8.387 18.695 18.695 18.695h474.61c10.308 0 18.695-8.387 18.695-18.695V19.195C512 8.887 503.613.5 493.305.5zM482 30.5v237.406l-94.352-94.355c-6.152-6.14-16.156-6.137-22.304.012l-133.442 133.44-85.238-85.233a15.674 15.674 0 00-11.164-4.63c-4.215 0-8.176 1.641-11.156 4.622L30 316.105V30.5zM30 409.617v-51.086l105.5-105.5 85.234 85.235a15.694 15.694 0 0011.168 4.632c4.211 0 8.176-1.644 11.153-4.625L376.5 204.828l105.504 105.504v99.285zm0 0" />
		</Svg>
	)
}

export default ImageThumb