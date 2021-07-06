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
function catAndMouse(mouse, cat1, cat2) {
  let distCatUm = mouse < cat1 ? cat1 - mouse : mouse - cat1;
  let distCatDois = mouse < cat2 ? cat2 - mouse : mouse - cat2;

  distCatUm <= 0 ? distCatUm * -1 : distCatUm;
  distCatDois <= 0 ? distCatDois * -1 : distCatDois;

  return distCatUm > distCatDois ? "cat2" : distCatUm === distCatDois ? "os gatos trombam e o rato foge" : "cat1";
}

// Desafio 8
function fizzBuzz(arr) {
  let arrNomes = [];

  for (let index in arr) {
    if (arr[index] % 3 !== 0 && arr[index] % 5 !== 0) {
        arrNomes.push("bug!");
    } else if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
        arrNomes.push("fizzBuzz");
    } else if (arr[index] % 3 === 0) {
      arrNomes.push("fizz");
    } else if (arr[index] % 5 === 0){
      arrNomes.push("buzz");
    }
  }

  return arrNomes;
}

// Desafio 9
function encode(str) {
  let strCodif = '';

  for (let index in str){
    if (str[index] === 'a' || str[index] === 'e' || str[index] === 'i' || str[index] === 'o' || str[index] === 'u'){
      switch(str[index]) {
        case 'a':
          strCodif += '1';
          break;

        case 'e':
          strCodif += '2';
          break;

        case 'i':
          strCodif += '3';
          break;

        case 'o':
          strCodif += '4';
          break;

        case 'u':
          strCodif += '5';
          break;
      }
    } else {
      strCodif += str[index];
    }
  }
  return strCodif;
}
function decode(str) {
  let strCodif = '';

  for (let index in str){
    if (str[index] === '1' || str[index] === '2' || str[index] === '3' || str[index] === '4' || str[index] === '5'){
      switch(str[index]) {
        case '1':
          strCodif += 'a';
          break;

        case '2':
          strCodif += 'e';
          break;

        case '3':
          strCodif += 'i';
          break;

        case '4':
          strCodif += 'o';
          break;

        case '5':
          strCodif += 'u';
          break;
      }
    } else {
      strCodif += str[index];
    }
  }
  return strCodif;
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