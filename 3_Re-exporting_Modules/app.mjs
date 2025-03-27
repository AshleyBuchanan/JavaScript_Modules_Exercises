import { SmartString, SmartNumber } from './utils/index.mjs';

const name = new SmartString('Ashley');
console.log(name.toString());
console.log(name.createdAt);

const age = new SmartNumber(42);
console.log(age.toString());
console.log(age.value);
console.log(age.createdAt);