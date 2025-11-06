const convertButton = document.querySelector(".convert-button")//botão de converter
const currencySelect = document.querySelector(".currency-select")//selecionar as moedas
const fromCurrencySelect = document.querySelector(".from-currency-select")


 const convertValues = async() =>{
    const inputCurrencyValue = document.querySelector(".input-currency").value//valor do input que sera convertido
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor da moeda para converter
    const currencyValueConverted = document.querySelector(".currency-value")//valor da moeda convertida
    
    
     const data = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL")
    .then(response => response.json())

    console.log(data)

    // 🔹 cria um mapa de taxas com base na resposta da API
  const ratesAPI = {
    real: 1,
    dolar: parseFloat(data.USDBRL.high),
    euro: parseFloat(data.EURBRL.high),
    libra: parseFloat(data.GBPBRL.high),
    bitcoin: parseFloat(data.BTCBRL.high)
  };

    const from = fromCurrencySelect.value//moeda de origem
    const to = currencySelect.value//moeda de destino

    // converte o valor da moeda de origem para real
    const valueInBRL = inputCurrencyValue * ratesAPI[from]

    // converte de real para a moeda de destino
    const convertedValue = valueInBRL / ratesAPI[to]

    // formata o valor convertido
    const formatMap = {// mapa de formatação
        real: "pt-BR",
        dolar: "en-US",
        euro: "de-DE",
        libra: "en-GB",
        bitcoin: "en"
    }

    const currencyCode = {// categorização dos códigos de moeda
        real: "BRL",
        dolar: "USD",
        euro: "EUR",
        libra: "GBP",
        bitcoin: "BTC"
    }

    currencyValueConverted.innerHTML = new Intl.NumberFormat(formatMap[to], {// atual valor convertido
        style: "currency",
        currency: currencyCode[to]//para
    }).format(convertedValue)//valor convertido

    currencyValueToConvert.innerHTML = new Intl.NumberFormat(formatMap[from], {// valor para converter
        style: "currency",
        currency: currencyCode[from]//de
    }).format(inputCurrencyValue)//atual valor do input
}

function changeFromCurrency() {//função de mudar imagem e nome do select "converter de"
    const currencyName = document.getElementById("currency-name-2")//nome da moeda de origem
    const currencyImagem = document.querySelectorAll(".currency-img")[0] //primeira imagem (moeda de origem)

    if (fromCurrencySelect.value == "dolar") {//se for dólar
        currencyName.innerHTML = "Dólar Americano"//muda nome para dólar
        currencyImagem.src = "./img/Dolar.png"//muda imagem para dólar
    } else if (fromCurrencySelect.value == "euro") {//se for euro
        currencyName.innerHTML = "Euro"//muda nome para euro
        currencyImagem.src = "./img/euro.png"//muda imagem para euro
    } else if (fromCurrencySelect.value == "libra") {//se for libra
        currencyName.innerHTML = "Libra Esterlina"//muda nome para libra
        currencyImagem.src = "./img/libra 1.png"//muda imagem para libra
    } else if (fromCurrencySelect.value == "bitcoin") {//se for bitcoin
        currencyName.innerHTML = "Bitcoin"//muda nome para bitcoin
        currencyImagem.src = "./img/bitcoin 1.png"//muda imagem para bitcoin
    } else {//caso contrário (real)
        currencyName.innerHTML = "Real"//muda nome para real
        currencyImagem.src = "./img/real.png"//muda imagem para real
    }

    convertValues()//atualiza os valores na tela após mudar a moeda
}

function changeToCurrency() {//função de mudar imagem e nome do select "converter para"
    const currencyName = document.getElementById("currency-name")//nome da moeda de destino
    const currencyImagem = document.querySelectorAll(".currency-img")[1] //segunda imagem (moeda de destino)

    if (currencySelect.value == "dolar") {//se for dólar
        currencyName.innerHTML = "Dólar Americano"//muda nome para dólar
        currencyImagem.src = "./img/Dolar.png"//muda imagem para dólar
    } else if (currencySelect.value == "euro") {//se for euro
        currencyName.innerHTML = "Euro"//muda nome para euro
        currencyImagem.src = "./img/euro.png"//muda imagem para euro
    } else if (currencySelect.value == "libra") {//se for libra
        currencyName.innerHTML = "Libra Esterlina"//muda nome para libra
        currencyImagem.src = "./img/libra 1.png"//muda imagem para libra
    } else if (currencySelect.value == "bitcoin") {//se for bitcoin
        currencyName.innerHTML = "Bitcoin"//muda nome para bitcoin
        currencyImagem.src = "./img/bitcoin 1.png"//muda imagem para bitcoin
    } else {//caso contrário (real)
        currencyName.innerHTML = "Real"//muda nome para real
        currencyImagem.src = "./img/real.png"//muda imagem para real
    }

    convertValues()//atualiza os valores na tela após mudar a moeda
}


 fromCurrencySelect.addEventListener("change", changeFromCurrency)//acao de mudar o select
currencySelect.addEventListener("change", changeToCurrency)//acao de mudar o select
convertButton.addEventListener("click", convertValues)//ação de clicar no botão para converter os valores

    










