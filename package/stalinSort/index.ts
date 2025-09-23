/**
 * Sort an array of numbers with stalin sort.
 * @param {number[]} values
 */
export function stalinSort(values: number[] = []): number[] {
	if (!values.length) {
		return values;
	}

	return values.reduce(
		(previous: number[], next: number, index: number) => !index || next >= previous[previous.length - 1]
			? [...previous, next]
			: previous,
		[]
	);
}
