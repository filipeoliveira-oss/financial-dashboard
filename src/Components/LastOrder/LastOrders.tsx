import { useTranslation } from 'react-i18next'
import './LastOrders.css'
import negotiations from '../../Utils/Negotiations/Negotiations.json'

export default function LastOrders(){

    const {t} = useTranslation()
    
    function sortList(){
        return negotiations.sort((a, b) => b.purchaseDate - a.purchaseDate);
    }

    const sortedNegotiations = sortList()
    const lastFiveOrders = [] as any

    function populateLastFiveOrders(){
        for(var i = 0; i<=4; i++){
            lastFiveOrders.push(sortedNegotiations[i])
        }
    }
    
    populateLastFiveOrders()

    return(
        <>
            <h3 className='holdings-lastOrdersTitle'>{t('carteira.ultimasordens')}</h3>
            <table className='holdings-table'>
                    <th>{t('carteira.ativo')}</th>
                    <th>{t('carteira.ordem')}</th>
                    <th>{t('carteira.qtd')}</th>
                    <th>{t('carteira.preco')}</th>
                    <tbody>
                    {lastFiveOrders.map((element:any) =>{
                        return(
                            <tr className='holdings-tr'>
                                <td>{element.ticker}</td>
                                <td>{element.order}</td>
                                <td>{element.qtd}</td>
                                <td>{element.orderPrice}</td>
                            </tr>
                        )
                })}

                    </tbody>
            </table>
        </>
        
    )
}