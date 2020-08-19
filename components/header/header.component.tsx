import * as React from 'react';
import { i18n, Link, withTranslation } from "i18n";
import { WithTranslation } from 'react-i18next';

import "./header.module.sass";

export default withTranslation('common')(function HeaderComponent({ t }: WithTranslation) {

    const changeLanguage = function () {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
    };

    return (
        <header className="header">
            <nav className="header__nav container">
                <Link href="/"><a>{t('home')}</a></Link>
                <button
                    type='button'
                    onClick={changeLanguage}
                    >
                    {i18n.language === 'en' ? 'fr' : 'en'}
                </button>
            </nav>
        </header>
    );
})