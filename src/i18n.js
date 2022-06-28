import { createI18n } from 'vue-i18n'
import en from './translations/en-US.json'

export default new createI18n({
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: {
        'en-US': en
    }
})
