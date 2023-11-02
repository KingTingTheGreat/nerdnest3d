import { RUBBER_DUCKY } from './products/rubber-ducky';
import { SABER_STAND } from './products/saber-stand';
import { HEART_CARABINER } from './products/heart-carabiner';
import { PEN_REPLACEMENT } from './products/pen-replacement';
import { SHARK_GUITAR_PICK } from './products/shark-guitar-pick';
import { XSHOT_LONGSHOT_BARREL } from './products/xshot-longshot-barrel';

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
    SHARK_GUITAR_PICK,
    XSHOT_LONGSHOT_BARREL,
];

export function user() {
    return SCROOGE;
}
