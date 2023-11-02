import { RUBBER_DUCKY } from "./products/rubber-ducky";
import { SABER_STAND } from "./products/saber-stand";
import { SCROOGE } from "./users/scrooge";

export function products() {
  return (
    [RUBBER_DUCKY, SABER_STAND]
  )
};

export function user() {
  return (
    SCROOGE
  )
};