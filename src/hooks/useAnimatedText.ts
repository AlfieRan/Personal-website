import {useEffect, useState} from "react";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";

export function useAnimatedText(InfoPieces: string[], ms?: number) {
	const [text, setText] = useState({ phrase: InfoPieces[0], index: 0 });
	const [showing, setShowing] = useState(false);

	function changeInfo() {
		// First we need to get the current phrase and the next phrase
		const initialPhrase = text;
		const finalIndex = (initialPhrase.index + 1) % InfoPieces.length;
		const finalPhrase = { phrase: InfoPieces[finalIndex], index: finalIndex };

		// Now calculate some additional variables
		const randomLetters = 3;
		const totalIterations = Math.max(finalPhrase.phrase.length, initialPhrase.phrase.length) + randomLetters;
		const lengthDifference = finalPhrase.phrase.length - initialPhrase.phrase.length;

		// Now animate the transition
		let iterations = 0;
		const subInterval = setInterval(() => {
			// Create a new phrase
			let newPhrase = "";
			for (let i = 0; i < initialPhrase.phrase.length + Math.ceil(lengthDifference * iterations / totalIterations); i++) {
				// First introduce the new letters from the final phrase
				if (i + randomLetters / 2 < iterations && i < finalPhrase.phrase.length) {
					newPhrase += finalPhrase.phrase[i];
				} else if (i - randomLetters / 2 > iterations && i < initialPhrase.phrase.length) {
					// Then introduce the old letters from the initial phrase
					newPhrase += initialPhrase.phrase[i];
				} else if (Math.abs(i - iterations) <= randomLetters) {
					// Then introduce the random letters
					newPhrase += letters[Math.floor(Math.random() * letters.length)];
				}
			}

			// Now set the new phrase
			setText({ phrase: newPhrase, index: finalPhrase.index });
			iterations++;

			if (iterations >= totalIterations) {
				// If we have reached the end, set the final phrase and clear the interval
				setText(finalPhrase);
				clearInterval(subInterval);
			}
		}, 50);
	}

	// This will run every 3 seconds to change the info displayed in the title.
	useEffect(() => {
		if (!showing) return;
		const mainInterval = setInterval(changeInfo, ms ?? 3000);
		return () => clearInterval(mainInterval);
	}, [text, showing]);

	return { text, setShowing };
}