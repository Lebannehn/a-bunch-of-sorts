import { GenericOptions } from '../types';

type TerrorOptions = {
	/**
	 * Remove duplicates
	 * @default false
	 */
	uniqueValues?: boolean,
} & GenericOptions;

/**
 * Sort an array of numbers with stalin sort.
 * Stalin sort is a sorting algorithm that removes elements from an array that are out of order.
 *
 * @param {number[]} values an array of numbers
 * @param {TerrorOptions} options a set of options
 */
export function stalinSort(values: number[] = [], options: TerrorOptions = {}): number[] {
	options = {
		isAscendingOrder: true,
		uniqueValues: false,
		...options
	};

	if (!values.length) {
		return values;
	}

	function mercy(previous: number, next: number): boolean {
		return options.isAscendingOrder
			? options.uniqueValues ? next > previous : next >= previous
			: options.uniqueValues ? next < previous : next <= previous;
	}

	return values.reduce(
		(previous: number[], next: number, index: number) => !index || mercy(previous[previous.length - 1], next)
			? [...previous, next]
			: previous,
		[]
	);
}
