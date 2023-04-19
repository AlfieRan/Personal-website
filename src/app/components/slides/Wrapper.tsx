"use client";
import {motion, useSpring} from "framer-motion";

interface Props {
	index: number;
	children: JSX.Element;
	onCreate?: () => void;
	onDestroy?: () => void;
}

export function ItemWrapper({children, index, onCreate, onDestroy}: Props) {
	const outOfFocusX = index % 2 === 0 ? 100 : -100;
	const outOfFocusSize = 0.8;

	const x = useSpring(index > 2 ? outOfFocusX : 0, {stiffness: 100, damping: 20})
	const scale = useSpring(0.8, {stiffness: 100, damping: 20})

	function onEnter() {
		x.set(0);
		scale.set(1);
		if (onCreate !== undefined) onCreate()
	}

	function onLeave() {
		x.set(outOfFocusX);
		scale.set(outOfFocusSize);
		if (onDestroy !== undefined) onDestroy()
	}

	return (
		<motion.div
			className={"flex flex-col md:flex-row w-full border-2 rounded-lg overflow-hidden"}
			style={{x, scale}}
			onViewportEnter={onEnter}
			onViewportLeave={onLeave}
			layout
		>
			{children}
		</motion.div>
	);
}
