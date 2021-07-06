// Desafio 10
function techList(arr, name) {

  function ordenArrMenorMaior(arr) {
    for (let index = 1; index < arr.length; index += 1) {
      for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (arr[index] < arr[secondIndex]) {
          let position = arr[index];
          arr[index] = arr[secondIndex];
          arr[secondIndex] = position;
        }
      }
    }
    return arr;
  }

  let arrSaida = [];

  for (let index in ordenArrMenorMaior(arr)){
    let minObj = {
      "tech": 0,
      "name": name
    }
    minObj.tech = ordenArrMenorMaior(arr)[index];
    arrSaida.push(minObj);
  }

  arrSaida = arrSaida[0] == undefined ? 'Vazio!' : arrSaida;

  return arrSaida;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
