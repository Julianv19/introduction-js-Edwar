// los booleanos tienen dos valores falso y verdadero.
let age = 42;
// Mayor que
let isOlderthan = age >= 18;
console.log(isOlderthan)

// ================================
let userName = 'Julian';
let haveName = userName !== "";

console.log(haveName);
// ======================
// En JS 0 es falsy, pero culauier número distinto de cero es truthy.

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(10));
console.log(Boolean(-5));
console.log(typeof Boolean(-5));

// =======================================
// En JS null or undefined siempre se convierte en false.
let nullValue = null;
let undefinedValue;

console.log(Boolean(nullValue));
console.log(Boolean(undefinedValue));

// ========================================
let haveAccess = true;

if (haveAccess)  {
    console.log("Welcome to System;");

} else{
    console.log ("Denied access");
}
