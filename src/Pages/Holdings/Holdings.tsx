import PageTitle from "../../Components/PageTitle/PageTile";
import { useTranslation } from 'react-i18next'
import '../../Utils/i18n/i18n.ts'

export default function Holdings(){
    const {t} = useTranslation()

    return(
        <>
            <PageTitle title={t('carteira.title')} text={t('carteira.text')}/>
        </>
    )
}