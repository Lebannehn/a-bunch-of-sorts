import { GenericOptions } from '../types';

/**
 * Sort an array of numbers with a miracle sort.
 * This function accepts an array of numbers and an options object and waits until some kind of miracle happens, and an array sorts itself.
 * Probably, it will never end and will never return. But who knows? Miracles happen.
 *
 * @param {number[]} values
 * @param {GenericOptions} options
 */
export const miracleSort = (values: number[], options: GenericOptions) => {
	options = {
		isAscendingOrder: true,
		...options
	};

	let isSorted = false;

	do {
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
};
