//CARLOS JULIAN OCAMPO GONZALEZ precedencia
//ejemplo
//CARLOS JULIAN OCAMPO GONZALEZ
//la precedencia sirve para definir en que orden se ejecutan las operaciones aritmeticas
//si queremos tener control sobre el orden en que se ejecutan
//debemos usar parentesis "()"
let result;

result = 20 +30 * 2;
result = 40 / 2 + 30 - 20 * 2; //resultado 10
result = 40 / 2 + (30 - 20) * 2;//resultado 40
result = 12**2 + 100 / 4 - 10 * 4;
console.log(result);