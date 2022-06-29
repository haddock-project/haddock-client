import { createI18n } from 'vue-i18n'

async function LoadLanguages() {
    let lang = {}
    // get all languages in the translations folder
    const files = import.meta.glob('./translations/*.json')
    for (const path in files) {
        await files[path]().then((mod) => {
            console.log('lang loaded', path, mod.default)
            Object.assign(lang, {[path.split('/').pop().split('.')[0]]: mod.default})
        })
    }
    return new createI18n({
        locale: 'en-US',
        fallbackLocale: 'en-US',
        messages: lang
    })
}
export default await LoadLanguages()