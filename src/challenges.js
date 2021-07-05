// Desafio 1
function compareTrue(var1, var2) {
  let trueFalse = var1 === true && var2 === var1 ? var1 : false;
  return trueFalse;
}

// Desafio 2
function calcArea(base, height) {
  let trianguloArea = (base * height) / 2;
  return trianguloArea;
}

// Desafio 3
function splitSentence(fraseDivid) {
  let palavra = '';
  let fraseArray = [];
  for (let index = 0; index < fraseDivid.length; index += 1) {
    if (fraseDivid[index] === ' ') {
      fraseArray.push(palavra);
      palavra = '';
    } else {
      palavra = palavra + fraseDivid[index];
    }
  }
  fraseArray.push(palavra);
  return fraseArray;
}

// Desafio 4
function concatName(arr) {
  let nomes = arr[arr.length - 1]+', '+arr[0];
  return nomes;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
