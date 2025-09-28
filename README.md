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
