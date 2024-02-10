import './Daytrade.css'
import PickYear from '../../Components/PickYear/PickYear'
import { useState } from 'react'
import PageTitle from '../../Components/PageTitle/PageTile'
import { useTranslation } from 'react-i18next'
import DaytradeChart from '../../Components/DaytradeChart/DaytradeChart'
import tradeList from '../../Utils/Negotiations/Negotiations.json'

export default function Daytrade(){

    const [selectedYear, setSelectedYear] = useState('2024')
    const {t} = useTranslation()

    const dataOfSelectedYear = tradeList.filter((element) =>{
        return new Date(element.purchaseDate * 1000).getFullYear().toString() == selectedYear
    })


    return(
        <div className='DaytradeContainer'>
            <PageTitle text={t('daytrade.text')} title='Day Trade'/>
            <PickYear setSelectedYear={setSelectedYear}/>
            <DaytradeChart data={dataOfSelectedYear}/>
        </div>
    )
}