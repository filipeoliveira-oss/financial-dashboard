import MoneySvg from '../../Assets/Svg/Money-svg'
import './MainGraph.css'
import tradeList from'../../Utils/Negotiations/Negotiations.json'
import { useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'
import getProfit from '../../Utils/Functions/getProfit'

export default function MainGraph(props:{selectedYear:string}){

    const {t} = useTranslation()

    const uniqueTypes = getType() 
    const [totalValueYear, setTotalValueYear] = useState(0)

    const tradeListYear = tradeList.filter((element) =>{
        return new Date(element.purchaseDate * 1000).getFullYear().toString() == props.selectedYear
    })

    useEffect(() =>{
        setTotalValueYear(getProfit({year:props.selectedYear}))
    },[props.selectedYear])


    function getType(){
        let uniqueTypes = [] as any

        tradeList.forEach((e) =>{
            if(!uniqueTypes.includes(e.type)){
                uniqueTypes.push(e.type)
            }  
        })

        return uniqueTypes
    }

    function getValueByType(type:string){
        var totalValueType = 0

        var listedFilterByType = tradeListYear.filter((element) =>{
            return element.type == type
        })

        listedFilterByType.forEach((e) =>{
            totalValueType += e.profit
        })
        
        return parseFloat(totalValueType.toFixed(2))
    }

    function getTypeName(type:string){
        if(type == 'crypto'){
            return t('type.crypto')
        }else if(type == 'ind'){
            return t('type.ind')
        }else if(type == 'rf'){
            return t('type.rf')
        }else if(type == 'ext'){
            return t('type.ext')
        }else{
            return type.toUpperCase()
        }
    }
    
    function getPercentage(){
        var total = 100000
        var achieved = getProfit({year:props.selectedYear})

        return ((achieved * 100) / total).toFixed(2)
    }

    return(
        <div className='mainGraphContainer'>
            <div className='graphCenterBack'>
                <div className="graphCenter">
                    <div className='graphCenterInfo'>
                        <h3 >{<MoneySvg/>}</h3>
                        <h1>{getPercentage()}%</h1>
                        <h3 >{t('total.alcancado')}</h3>
                    </div>
                </div>
            </div>

            <div className='graphTypeContainer'>
                {
                    uniqueTypes.map((type:string) =>{
                        return(
                            getValueByType(type) != 0 ?
                            <>
                                <div className={`graphTypes ${type}`} >
                                    <span>{getValueByType(type).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</span>
                                    <span>{getTypeName(type)}</span>
                                    <div className={`line-${type}`}></div>
                                </div>
                            </>
                            :''
                        )
                    })
                }
            </div>
            

            <span className="auxLines smaller"></span>
            <span className="auxLines bigger"></span>
            
            {/* <div className='teste'>a</div> */}
        </div>
    )
}