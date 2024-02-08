import PageTitle from "../../Components/PageTitle/PageTile";
import { useTranslation } from 'react-i18next'
import '../../Utils/i18n/i18n.ts'
import FinancialStatsChart from "../../Components/FinancialStatsChart/FinancialStatsChart.tsx";
import './Holdings.css'
import LastOrders from "../../Components/LastOrder/LastOrders.tsx";
import PickYear from "../../Components/PickYear/PickYear.tsx";
import { useState } from "react";
import MainGraph from "../../Components/MainGraph/MainGraph.tsx";

export default function Holdings(){
    const {t} = useTranslation()
      
    const [selectedYear, setSelectedYear] = useState('2024')
    const [profitValue, setProfitValue] = useState()

    return(
        <div className="holdings-container">
            <div className="holdings-info-container">
                <PageTitle title={t('carteira.title')} text={t('carteira.text')} />

                <div className="holdings-pickyear">
                    <PickYear  setSelectedYear={setSelectedYear}/>
                </div>

                <div className="holdings-FinancialStatsChart">
                    <FinancialStatsChart selectedYear={selectedYear}/>
                </div>

                <div className="holdings-lastorders">
                    <LastOrders/>
                </div>
            </div>

            <div className="holdings-graph-container">
                <MainGraph selectedYear={selectedYear}/>
            </div>
        </div>
    )
}