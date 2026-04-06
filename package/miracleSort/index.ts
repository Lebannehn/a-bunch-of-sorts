import { GenericOptions } from '../types';

type MiracleSortOptions = {
	/**
	 * The prayer to be used for the miracle sort.
	 * No miracle is guaranteed, but the function will try its best invoking the prayer.
	 */
	prayer: string,
} & GenericOptions;

/**
 * Sort an array of numbers with a miracle sort.
 * This function accepts an array of numbers and an options object and waits until some kind of miracle happens, and an array sorts itself.
 * Probably, it will never end and will never return. But who knows? Miracles happen.
 * O(∞) time complexity.
 * O(1) space complexity.
 *
 * @param {number[]} values
 * @param {MiracleSortOptions} options
 */
export const miracleSort = (values: number[], options: MiracleSortOptions) => {
	options = {
		isAscendingOrder: true,
		...options
	};

	let isSorted = false;

	do {
		globalThis.console.log(options.prayer);

		for (let index = 0; index < values.length; index++) {
			if (options.isAscendingOrder && values[index] >= values[index + 1]) {
				break;
			} else if (!options.isAscendingOrder && values[index] <= values[index + 1]) {
				break;
			}
			if (index === values.length - 1) {
				isSorted = true;
			}
		}
	} while (!isSorted)

	return values;
};
