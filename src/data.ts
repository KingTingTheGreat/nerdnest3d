import { RUBBER_DUCKY } from './products/rubber-ducky';
import { SABER_STAND } from './products/saber-stand';
import { HEART_CARABINER } from './products/heart-carabiner';
import { PEN_REPLACEMENT } from './products/pen-replacement';
import { SHARK_GUITAR_PICK } from './products/shark-guitar-pick';
import { XSHOT_LONGSHOT_BARREL } from './products/xshot-longshot-barrel';

import { SCROOGE } from './users/scrooge';

import { Product } from './types';

export const Products = [
    RUBBER_DUCKY,
    SABER_STAND,
    HEART_CARABINER,
    PEN_REPLACEMENT,
    SHARK_GUITAR_PICK,
    XSHOT_LONGSHOT_BARREL,
];

// export const PruductsByName: { [name: string]: Product } = {};
export const ProductsById: { [key: string]: Product } = {};
for (const product of Products) {
    // PruductsByName[product.name] = product;
    ProductsById[product.id] = product;
}
export const ProductsByName: { [name: string]: Product } = {};
for (const product of Products) {
    ProductsByName[product.name] = product;
}

export function user() {
    return SCROOGE;
}
