import i18next, { i18n } from "i18next";
import { initReactI18next } from "react-i18next";
import EN from '../../Locales/en/en.json'
import PT from '../../Locales/pt/pt.json'

i18next
    .use(initReactI18next)
    .init({
        lng:'pt',
        fallbackNS:'pt',
        resources:{
            en:{
                translation: EN
            },
            pt:{
                translation: PT
            }
        },
        interpolation:{
            escapeValue:false
        }
})

export default i18next