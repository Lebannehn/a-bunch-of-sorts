type TerrorOptions = {
	/**
	 * Sort by ascending order or not
	 * @default true
	 */
	ascendingOrder: boolean,
	/**
	 * Remove duplicates
	 * @default false
	 */
	uniqueValues: boolean,
};

/**
 * Sort an array of numbers with stalin sort.
 * Stalin sort is a sorting algorithm that removes elements from an array that are out of order.
 *
 * @param {number[]} values an array of numbers
 * @param {TerrorOptions} options a set of options
 */
export function stalinSort(values: number[] = [], options: TerrorOptions): number[] {
	if (!values.length) {
		return values;
	}

	function mercy(previous: number[], next: number): boolean {
		return options.ascendingOrder
			? options.uniqueValues ? next > previous[previous.length - 1] : next >= previous[previous.length - 1]
			: options.uniqueValues ? next < previous[previous.length - 1] : next <= previous[previous.length - 1];
	}

	return values.reduce(
		(previous: number[], next: number, index: number) => !index || mercy(previous, next)
			? [...previous, next]
			: previous,
		[]
	);
}
