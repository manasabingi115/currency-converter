import "./styles.css";

const api = "https://api.exchangerate-api.com/v4/latest/";
const currencyKeys = [
  "USD",
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "FOK",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KID",
  "KMF",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TVD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMW"
];

// for selecting different controls
var search = document.querySelector("#firstInput");
var convert = document.querySelector("#converter");
var fromCurrecy = document.querySelector("#sel1");
var toCurrecy = document.querySelector("#sel2");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var swap = document.querySelector(".fa-exchange-alt");
var resultFrom;
var resultTo;
var searchValue;

const options =
  `<option value="Select countryName...">Select countryName...</option>` +
  currencyKeys
    .map((c) => {
      return `<option value="${c}">${c}</option>`;
    })
    .join("\n");

fromCurrecy.innerHTML = options;
toCurrecy.innerHTML = options;

// Event when currency is changed
fromCurrecy.addEventListener("change", (event) => {
  resultFrom = event.target.value;
});

// Event when currency is changed
toCurrecy.addEventListener("change", (event) => {
  resultTo = event.target.value;
});

search.addEventListener("input", updateValue);

// function for updating value
function updateValue(e) {
  searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

// function getresults
function getResults() {
  fetch(api + fromCurrecy.value)
    .then((currency) => {
      return currency.json();
    })
    .then(displayResults);
}

// display results after convertion
function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(2);
  finalAmount.style.display = "block";
}

swap.addEventListener("click", () => {
  const temp = fromCurrecy.value;
  fromCurrecy.value = toCurrecy.value;
  toCurrecy.value = temp;
});
