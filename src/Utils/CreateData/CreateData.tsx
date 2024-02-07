const Stocks = [
  "PETR4", "VALE3", "ITUB4", "BBDC4", "ABEV3", "B3SA3", "BBAS3", "CMIG4", "GGBR4", "LREN3", "WIN", "WDO",
  "BTC", "ETH", "XRP"  // Adding Bitcoin, Ethereum, and Ripple as cryptocurrencies
];

function getRandomTicker() {
  return Stocks[Math.floor(Math.random() * Stocks.length)];
}

function getRandomProfit() {
  return parseFloat(((Math.random() - 0.5) * 200).toFixed(2)); // Generates a random value between -100 and 100
}

function isDayTrade(ticker:string){
  return ticker.toUpperCase() === "WIN" || ticker.toUpperCase() === "WDO" || Math.random() < 0.5;
}

function getType(ticker:string){
  if (ticker.toUpperCase() === 'WIN' || ticker.toUpperCase() === 'WDO'){
      return 'ind'
  }else if(ticker.toUpperCase() === 'BTC' ||ticker.toUpperCase() === 'ETH' ||ticker.toUpperCase() === 'XRP' ){
      return 'crypto'
  }else{
      return 'B3'
  }
}

function getRandomtimestamp(ticker:string){
  var year = getRandomYear(2021,2023)
  var month = getRandomMonth()
  var day = getRandomDay(month)
  var hour = getRandomHour(ticker)
  
  const fullDate = new Date(`${year}-${month}-${day}T${hour}:00`)
  const unixTimestamp = fullDate.getTime() / 1000
  return unixTimestamp
}

function getRandomYear(startYear:number, endYear:number){
  return Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
}

function getRandomMonth() {
  return String(Math.floor(Math.random() * 12) + 1).padStart(2, '0'); // Ensures two-digit month
}

function getRandomDay(month:string) {
// Assuming a month with 30 days for simplicity
  var daysQty = (parseInt(month) == 0o2 ? 29 : 30) 
  return String(Math.floor(Math.random() * daysQty) + 1).padStart(2, '0'); // Ensures two-digit day
}

function getRandomHour(ticker:string) {
  var startHour, endHour;
  if(ticker.toUpperCase() === 'WIN' || ticker.toUpperCase() === 'WDO'){
      startHour = 9
      endHour = 17
  }else if(ticker.toUpperCase() === 'BTC' || ticker.toUpperCase() === 'EHT' || ticker.toUpperCase() === 'XRP'){
      startHour = 0
      endHour = 23
  }else{
      startHour = 10 
      endHour = 17
  }


  const randomHour = Math.floor(Math.random() * (endHour - startHour + 1) + startHour);
  const randomMinute = Math.floor(Math.random() * 60);

  return `${String(randomHour).padStart(2, '0')}:${String(randomMinute).padStart(2, '0')}`;
}

function getRandomQty(){
  return Math.floor(Math.random() * 1000) + 1;
}

function getRandomOrder(){

  return Math.random() < 0.5 ? 'Compra':'Venda'
}

function getRandomOrderPrice() {
  return Math.floor(Math.random() * (150 - 10 + 1)) + 10;
}

const stockData = Array.from({ length: 100 }, () => {
  const selectedTicker = getRandomTicker()

  return {
    profit: getRandomProfit(),
    ticker: selectedTicker,
    dayTrade: isDayTrade(selectedTicker),
    purchaseDate: getRandomtimestamp(selectedTicker),
    type: getType(selectedTicker),
    qtd: getRandomQty(),
    order: getRandomOrder(),
    orderPrice: getRandomOrderPrice()
  };
});