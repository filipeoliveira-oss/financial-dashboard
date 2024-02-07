import PageTitle from "../../Components/PageTitle/PageTile";
import { useTranslation } from 'react-i18next'
import '../../Utils/i18n/i18n.ts'
import FinancialStatsChart from "../../Components/FinancialStatsChart/FinancialStatsChart.tsx";
import './Holdings.css'
import LastOrders from "../../Components/LastOrder/LastOrders.tsx";

export default function Holdings(){
    const {t} = useTranslation()
      

    return(
        <>
            <PageTitle title={t('carteira.title')} text={t('carteira.text')}/>

            <div className="holdings-FinancialStatsChart">
                <FinancialStatsChart />
            </div>

            <div className="holdings-lastorders">
                <LastOrders/>
            </div>
        </>
    )
}