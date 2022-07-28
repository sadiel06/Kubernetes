function busquedaBinaria(arr, busqueda) {
  const puntoMedio = Math.floor(arr.length / 2);

  if (arr[puntoMedio] == busqueda) {
    return arr[puntoMedio];
  }

  if (arr[puntoMedio] < busqueda && arr.length > 1) {
    return busquedaBinaria(arr.slice(puntoMedio), busqueda);
  }

  if (arr[puntoMedio] > busqueda && arr.length > 1) {
    return busquedaBinaria(arr.slice(0, puntoMedio), busqueda);
  }

  return -1;
}

const bubbleSort = (arr) => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

module.exports = {
  bubbleSort: bubbleSort,
  busquedaBinaria: busquedaBinaria
}