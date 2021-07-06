// Desafio 1
function compareTrue(var1, var2) {
  return var1 === true && var2 === var1 ? var1 : false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
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
  return arr[arr.length - 1]+', '+arr[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arr) {

  function maiorValorArr(arr) {
    let maiorNum = arr[0];

    for (let index in arr) {
      maiorNum < arr[index] ? maiorNum = arr[index] : maiorNum;
    }

    return maiorNum;
  }

  let numRepeticao = 0;

  for (let index in arr) {
    arr[index] === maiorValorArr(arr) ? numRepeticao += 1 : numRepeticao;
  }

  return numRepeticao;

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
