let url =
  "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,ARS-BRL,CAD-BRL";

async function converter() {
  let input = document.getElementById("valor").value;
  let input1 = document.getElementById("valor1");
  await fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((moeda) => {
      dolar = moeda.USDBRL.ask;
      euro = moeda.EURBRL.ask;
      pesosArgentinos = moeda.ARSBRL.ask;
      dolarCanadense = moeda.CADBRL.ask;
    });

  let dolarFixed = Number(dolar).toFixed(2);
  let euroFixed = Number(euro).toFixed(2);
  let pesosArgentinosFixed = Number(pesosArgentinos).toFixed(2);
  let dolarCanadenseFixed = Number(dolarCanadense).toFixed(2);

  let convSelect = document.getElementById("moedaSelect");
  let convValue = convSelect.options[convSelect.selectedIndex].value;

  if (convValue === "USD") {
    input1.value = (input / dolarFixed).toFixed(2);
  } else if (convValue === "EUR") {
    input1.value = (input / euroFixed).toFixed(2);
  } else if (convValue === "ARS") {
    input1.value = (input / pesosArgentinosFixed).toFixed(2);
  } else if (convValue === "CAD") {
    input1.value = (input / dolarCanadenseFixed).toFixed(2);
  }
}

async function converter1() {
  let input = document.getElementById("valor1").value;
  let input1 = document.getElementById("valor");
  await fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((moeda) => {
      dolar = moeda.USDBRL.ask;
      euro = moeda.EURBRL.ask;
      pesosArgentinos = moeda.ARSBRL.ask;
      dolarCanadense = moeda.CADBRL.ask;
    });

  let dolarFixed = Number(dolar).toFixed(2);
  let euroFixed = Number(euro).toFixed(2);
  let pesosArgentinosFixed = Number(pesosArgentinos).toFixed(2);
  let dolarCanadenseFixed = Number(dolarCanadense).toFixed(2);

  let convSelect = document.getElementById("moedaSelect");
  let convValue = convSelect.options[convSelect.selectedIndex].value;

  if (convValue === "USD") {
    input1.value = (dolarFixed * input).toFixed(2);
  } else if (convValue === "EUR") {
    input1.value = (euroFixed * input).toFixed(2);
  } else if (convValue === "ARS") {
    input1.value = (pesosArgentinosFixed * input).toFixed(2);
  } else if (convValue === "CAD") {
    input1.value = (input * dolarCanadenseFixed).toFixed(2);
  }
}

function moedaSel(val) {
  let input = document.getElementById("valor1");
  let input1 = document.getElementById("valor");
  if (val === "USD") {
    input.value = "";
    input1.value = "";
  } else if (val === "EUR") {
    input.value = "";
    input1.value = "";
  }
}
