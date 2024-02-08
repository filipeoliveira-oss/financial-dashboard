
import tradeList from '../Negotiations/Negotiations.json'


export default function getProfit(props:{year:string}){
    var profitValue = 0
    var tradeListYear = tradeList.filter((element) =>{
        return new Date(element.purchaseDate * 1000).getFullYear().toString() == props.year
    })
    tradeListYear.forEach((trade) =>{
        profitValue += trade.profit
    })

    return parseFloat(profitValue.toFixed(2))
}