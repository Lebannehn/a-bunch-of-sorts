/**
 * Sort an array of numbers with stalin sort.
 * @param {number[]} values an array of numbers
 * @param {boolean} isAscending ascending or descending order, true by default
 */
export function stalinSort(values: number[] = [], isAscending = true): number[] {
	if (!values.length) {
		return values;
	}

	function checkDirection(previous: number[], next: number): boolean {
		return isAscending
			? next >= previous[previous.length - 1]
			: next <= previous[previous.length - 1];
	}

	return values.reduce(
		(previous: number[], next: number, index: number) => !index || checkDirection(previous, next)
			? [...previous, next]
			: previous,
		[]
	);
}
