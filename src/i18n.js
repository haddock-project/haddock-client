import { createI18n } from 'vue-i18n'
let lang = {}

async function LoadLanguages() {

    // get all languages in the translations folder
    const files = import.meta.glob('./translations/*.json')

    // load all languages into the lang object
    for (const path in files) {
        await files[path]().then((mod) => {
            Object.assign(lang, {[path.split('/').pop().split('.')[0]]: mod.default})
        })
    }

    // create the i18n instance
    return new createI18n({
        locale: 'en-US',
        fallbackLocale: 'en-US',
        messages: lang
    })
}
export default LoadLanguages()