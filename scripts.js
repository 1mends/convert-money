const button = document.getElementById('convert-button')

const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 109059.79


const convertValues = () => {
    const inputreal = document.getElementById('input-real').value
    const realvalue = document.getElementById('real-value')
    const dolarvalue = document.getElementById('dolar-value')

    realvalue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputreal);

    if (select.value === 'US$ Dólar Americano') {

        dolarvalue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputreal / dolar);

    }


    if (select.value === '€ Euro') {

        dolarvalue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputreal / euro);
    }


    if (select.value === '₿ Bitcoin') {

        dolarvalue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputreal / bitcoin);
    }


}


changeCurrency = () => {
    const currencyname = document.getElementById('currency-name')
    const currencyimg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        currencyname.innerHTML = 'Dólar Americano'
        currencyimg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (select.value === '€ Euro') {
        currencyname.innerHTML = 'Euro'
        currencyimg.src = "./assets/euro.png"
    }

    if (select.value === '₿ Bitcoin') {
        currencyname.innerHTML = 'Bitcoin'
        currencyimg.src = "./assets/bitcoin.png"
    }
    

    convertValues()

}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)