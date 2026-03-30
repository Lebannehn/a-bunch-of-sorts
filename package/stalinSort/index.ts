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

	function mercy(accumulator: number, value: number): boolean {
		return options.isAscendingOrder
			? options.uniqueValues ? value > accumulator : value >= accumulator
			: options.uniqueValues ? value < accumulator : value <= accumulator;
	}

	return values.reduce(
		(accumulator: number[], value: number, index: number) => {
			if (!index || mercy(accumulator[accumulator.length - 1], value)) {
				accumulator.push(value);
			}

			return accumulator;
		},
		[]
	);
	// return values.reduce(
	// 	(previous: number[], next: number, index: number) => !index || mercy(previous[previous.length - 1], next)
	// 		? [...previous, next]
	// 		: previous,
	// 	[]
	// );
}
