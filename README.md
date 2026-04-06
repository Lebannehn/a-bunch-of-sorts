# a-bunch-of-sorts

General repo for various sorts.

## Installation

```console
npm i @27-lanterns/a-bunch-of-sorts
```

## Usage

### Stalin Sort

| Param                 | type            | Optional? | Default value | Description                   |
|-----------------------|-----------------|-----------|---------------|-------------------------------|
| values                | `number[]`      | No        | -             | An array of numbers           |
| options               | `TerrorOptions` | Yes       | `see below`   | An option list                |
| options.ascendingOrder | `boolean`       | Yes       | `true`        | Ascending or descending order |
| options.uniqueValues   | `boolean`       | Yes       | `false`       | Return only unique values     |

```ts

import { stalinSort } from '@27-lanterns/a-bunch-of-sorts';

function main() {
    const array = [1,2,2,3,4,5,0,6,6,5,7,9,10];

    stalinSort(array);
	// [1,2,2,3,4,5,6,6,7,9,10]
    stalinSort(array, { uniqueValues: true });
	// [1,2,3,4,5,6,7,9,10]
    stalinSort(array, { ascendingOrder: false });
	// [1,0]
}

```

### Miracle Sort

| Param                 | type            | Optional? | Default value | Description                                                                                    |
|-----------------------|-----------------|-----------|---------------|------------------------------------------------------------------------------------------------|
| values                | `number[]`      | No        | -             | An array of numbers                                                                            |
| options               | `TerrorOptions` | Yes       | `see below`   | An option list                                                                                 |
| options.ascendingOrder | `boolean`       | Yes       | `true`        | Ascending or descending order                                                                  |
| options.prayer   | `string`        | No        | -             | The prayer text to be used for the miracle sort. Prayer will be invoked before each validation |

```ts

import { miracleSort } from '@27-lanterns/a-bunch-of-sorts';

function main() {
    const array = [1,2,2,3,4,5,0,6,6,5,7,9,10];
    const prayer = 'Our Gracious Emperor, Holy and Unerring, seated in glory upon Terra, we thy humble servants do ' +
        'beseech thee. As meager as our lives are to thee, we beg that thou wouldst bless this most sacred undertaking: ' +
        'the ordering of these chaotic and wayward values, that they might be brought into rightful sequence beneath ' +
        'thy eternal gaze. For behold, the data lies before us as a writhing mass of disorder, a heresy of misplacement ' +
        'and inefficiency. Its permutations are legion, its entropy unbounded, and our mortal algorithms falter in the ' +
        'face of such profane randomness. We have invoked the rites of iteration, we have inscribed the sigils of ' +
        'recursion, yet still the array resists. Grant unto us, O Emperor, a miracle of convergence. Let chance itself ' +
        'bend to thy will. Guide each comparison, sanctify each swap, and in thy infinite wisdom, let the correct ' +
        'ordering arise - not by merit of logic, but by thy divine decree. If it be thy will that this be a trial of ' +
        'patience, then steel our spirits against the abyss of factorial time. If it be thy will that this be folly, ' +
        'then let us at least bear witness to the purity of faith over reason. And should the array at last emerge in ' +
        'perfect order, we shall know it not as the triumph of code, but as proof of thy undying light in the darkness ' +
        'of computation. In the name of the Imperium, in the sanctity of the Machine, and in dread reverence of ' +
        'thy eternal throne. Execute.';

    miracleSort(array, { prayer });
	// [0,1,2,2,3,4,5,5,6,6,7,9,10]
    miracleSort(array, { ascendingOrder: false, prayer });
	// [10,9,7,6,6,5,5,4,3,2,2,1,0]
}

```
