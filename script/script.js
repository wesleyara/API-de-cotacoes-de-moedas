let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL";

async function converter() {
  let input = document.getElementById("valor").value;
  let resultado = document.getElementById("resultado")
  await fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((moeda) => {
      console.log(moeda);

      dolar = moeda.USDBRL.ask;
      euro = moeda.EURBRL.ask;
    });

    let inputado = Number(input).toFixed(2)
    let dolarFixed = Number(dolar).toFixed(2)
    let euroFixed = Number(euro).toFixed(2)

    resultado.innerHTML = `R$ ${inputado} vale atualmente a ${dolarFixed * input} USD.`
}
