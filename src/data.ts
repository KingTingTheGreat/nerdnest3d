import { RUBBER_DUCKY } from './products/rubber-ducky';
import { SABER_STAND } from './products/saber-stand';
import { HEART_CARABINER } from './products/heart-carabiner';
import { PEN_REPLACEMENT } from './products/pen-replacement';

import { SCROOGE } from './users/scrooge';

// export function products() {
//   return (
//     [RUBBER_DUCKY, SABER_STAND]
//   )
// };

export const PRODUCTS = [
    RUBBER_DUCKY,
    SABER_STAND,
    HEART_CARABINER,
    PEN_REPLACEMENT,
];

export function user() {
    return SCROOGE;
}
