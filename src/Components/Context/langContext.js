import Spanish from '../../lang/es.json'
import English from '../../lang/en.json'
import React, { useState } from 'react'
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

function ChangeLanguage({children}){
    let localeDefault;
    let languageDefault;

    const langSaved = localStorage.getItem('langu')

    if(langSaved){
        localeDefault = langSaved

        if(langSaved==='sp'){
            languageDefault = Spanish
        }else if(langSaved ==='en'){
            languageDefault = English
        }else{
            localeDefault = 'en'
            languageDefault = English
        }
    }

    const [language, setLanguage] = useState(languageDefault)
    const [locale, setLocale] = useState(localeDefault)

    const settingLang = (lang)=>{
        switch(lang){
            case 'en':
                setLanguage(English)
                setLocale('en')
                localStorage.setItem('langu', 'en')
            break;
            case 'sp':
                setLanguage(Spanish)
                setLocale('sp')
                localStorage.setItem('langu', 'sp')
            break;
            default:
                setLanguage(English)
                setLocale('en')
        }
    }

    return (
        <langContext.Provider value={{settingLang: settingLang}}>
            <IntlProvider locale={locale} messages={language}>
                {children}
            </IntlProvider>

        </langContext.Provider>
    )}

export { ChangeLanguage, langContext }