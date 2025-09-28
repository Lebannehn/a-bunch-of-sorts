/**
 * Sort an array of numbers with stalin sort.
 * Stalin sort is a sorting algorithm that removes elements from an array that are out of order.
 *
 * @param {number[]} values an array of numbers
 * @param {boolean} isAscendingOrder ascending or descending order, true by default
 * @param {boolean} isUnique if true, the array will contain unique values
 */
export function stalinSort(values: number[] = [], isAscendingOrder = true, isUnique = false): number[] {
	if (!values.length) {
		return values;
	}

	function mercy(previous: number[], next: number): boolean {
		return isAscendingOrder
			? isUnique ? next > previous[previous.length - 1] : next >= previous[previous.length - 1]
			: isUnique ? next < previous[previous.length - 1] : next <= previous[previous.length - 1];
	}

	return values.reduce(
		(previous: number[], next: number, index: number) => !index || mercy(previous, next)
			? [...previous, next]
			: previous,
		[]
	);
}
