import {useEffect, useState} from "react";

export function useScreenWidth() {
	const [width, setWidth] = useState(1920);

	useEffect(() => {
		try {
			setWidth(window.innerWidth);
			window.addEventListener("resize", () => {
				setWidth(window.innerWidth);
			});
			return () => {
				window.removeEventListener("resize", () => {
					setWidth(window.innerWidth);
				});
			};
		} catch (e) {
			return;
		}
	}, []);

	return width;
}