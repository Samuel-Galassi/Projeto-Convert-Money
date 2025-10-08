const convertButton = document.querySelector(".convert-button")//botão de converter
const currencySelect = document.querySelector(".currency-select")//selecionar as moedas


function convertValues() {//função para converter os valores
    const inputCurrencyValue = document.querySelector(".input-currency").value//valor digitado no input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas
    
    console.log(currencySelect.value)
    const dolarToday = 5.32//valor do dolar hoje
    const euroToday = 6.2//valor do euro hoje
    const libraToday = 7.2//valor da libra hoje
    const bitcoinToday = 653350//valor do bitcoin hoje

    if(currencySelect.value == "dolar"){//se o select estiver selecionado o valor de dolar, entra aqui

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",//mostra o valor em dolar
         {
        style: "currency",
         currency: "USD"
        }).format(inputCurrencyValue / dolarToday) //o conversão do valor digitado para dolar
    }

if(currencySelect.value == "euro"){//se o select estiver selecionado o valor de euro, entra aqui
currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",//mostra o valor em euro
         {
        style: "currency",
         currency: "EUR"
        }).format(inputCurrencyValue / euroToday) //o conversão do valor digitado para euro
    }

if(currencySelect.value == "libra"){//se o select estiver selecionado o valor de libra, entra aqui
currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",//mostra o valor em libra
         {
        style: "currency",
         currency: "GBP"
        }).format(inputCurrencyValue / libraToday) //o conversão do valor digitado para libra
    }
if(currencySelect.value == "bitcoin"){//se o select estiver selecionado o valor de bitcoin, entra aqui
currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",//mostra o valor em bitcoin
         {
        style: "currency",
         currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday) //o conversão do valor digitado para bitcoin
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {//mostra o valor em real para converter
        style: "currency",
         currency: "BRL"
        }).format(inputCurrencyValue)//mostra o valor em real
    }

    function changeCurrency(){//função para mudar a imagem da moeda
     const currencyName = document.getElementById("currency-name")//nome da moeda
     const currencyImagem = document.querySelector(".currency-img")//foto da moeda
    if(currencySelect.value == "dolar"){//se o select estiver selecionado o valor de dolar, entra aqui
        currencyName.innerHTML = "Dólar Americano"
        currencyImagem.src="./img/Dolar.png"//muda a imagem para dólar
    }
    if(currencySelect.value == "euro"){//se o select estiver selecionado o valor de euro, entra aqui
        currencyName.innerHTML = "Euro"
        currencyImagem.src="./img/euro.png"//muda a imagem para euro
    }
    if (currencySelect.value == "libra"){//se o select estiver selecionado o valor de libra, entra aqui
        currencyName.innerHTML = "Libra Esterlina"
        currencyImagem.src="./img/libra 1.png"//muda a imagem para libra
    }
    if (currencySelect.value == "bitcoin"){//se o select estiver selecionado o valor de bitcoin, entra aqui
        currencyName.innerHTML = "Bitcoin"
        currencyImagem.src="./img/bitcoin 1.png"//muda a imagem para bitcoin


    }
    convertValues()

    }
    

currencySelect.addEventListener("change", changeCurrency)//acao de mudar o select
convertButton.addEventListener("click", convertValues)//ação de clicar no botão para converter os valores

    










