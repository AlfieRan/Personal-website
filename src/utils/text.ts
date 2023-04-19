export function StartsWithVowel(word: string) {
	return /^[aeiou]/i.test(word);
}