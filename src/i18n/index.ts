import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation from "@/i18n/locales/pt/translation.json"

i18n.use(initReactI18next).init({
    fallbackLng: 'ptBR',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        ptBR: translation
    }
})

export default i18n;