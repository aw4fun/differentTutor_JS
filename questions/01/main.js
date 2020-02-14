/**
 * null vs undefined
 */

let aNull = null; // empty value
let aUndefined; // declared but undefined variable

/**
 * operator && AND
 */

// return first False value or last operand

let aAnd1 = (false && 1 && []); // false
let aAnd2 = ('' && true && 6); // 6


/**
 * operator || OR
 */

// return first TRUE value or last operand

let aOR1 = (false || undefined); // false
let aOR2 = ('' || true || 6); // 6

/**
 * operator + is fastest toString operator ?
 */

//Согласно MDN оператор "+" действительно является самым быстрым способом преобразования строки в число,
//поскольку он не выполняет никаких операций со значением, которое уже является числом.

/**
 * DOM ?
 */

// Browser API to work with HTML XML documents
// in JS DOM => document

/**
 *  Event Propagation ?
 */

// eventListener('event', callback, useCapture = true)
// Capturing phase => Window Document node node node target

// Target phase

// eventListener('event', callback, useCapture = false) default;
// Bubbling phase => target node node node Document Window
//

/**
 * event.preventDefault()
 */

// Cancel default event behavior

/**
 * event.stopPropagation()
 */

// Stop event propagation

/**
 * how to find out what event.PreventDefault is used ?
 */

// event.defaultPrevented()

/**
 *  let obj = {};
 *  obj.someprop.x; why crash ?
 */

// someprop in undefined

/**
 * What is event.target ?
 */

//The element that calling event

/**
 * What is event.currentTarget ?
 */

//The element that contain eventListener

/**
 *  '==' and '===' diff ?
 */

// '==' - abstract equal coersion after type conversion
// '===' - strict equal immediate coersion w/o type conversion

/**
 * {a: 1} !equal {a: 1} ?
 */

// Diff objects in memory heap

/**
 *  !! operator ?
 */

// !!{} to boolean -> true

/**
 *  some expression inline
 */

// x = (x++, x = func(x), x *=2);

/**
 *  What is hoisting ?
 */

// var, func to global or func scope;


/**
 * What is scope ?
 */

// global, func, block ({let, const});

/**
 *  What is Closure ?
 */

// funct(){
//  let x = 4;
//  funct{
//      console.log(x);
//      }
//  }

/**
 * FAlse values in JS ?
 */

// null
// undefined
// 0
// ''
// false
// NaN

/**
 *  Value to bool ?
 */

// !!value
// Boolean(value)

/**
 *  What is use strict ?
 */
