import { GenericOptions } from '../types';

type ViolatingOptions = {
    /**
     * The preferred age limit for sorting.
     */
    preferredAgeLimit?: number,
} & GenericOptions;

/**
 * Sort an array of numbers with diddy sort.
 * It is less of a sorting algorithm and more of a bouncer.
 * Numbers above the preferred age limit are removed, then the survivors are sorted.
 * O(n log n) time complexity
 * O(n) space complexity
 *
 * @param {number[]} values
 * @param {ViolatingOptions} options
 */
export function diddySort(values: number[], options: ViolatingOptions = {}): number[] {
    const {
        isAscendingOrder = true,
        preferredAgeLimit = 18,
    } = options;

    return values
        .filter(value => value <= preferredAgeLimit)
        .sort((a, b) => isAscendingOrder ? a - b : b - a);
}

