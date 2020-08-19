// import type { AppProps } from 'next/app';
import { AppProps } from 'next/app'
import * as React from 'react';
import { LayoutComponent } from "Components";
import { appWithTranslation } from 'i18n'

import '../styles/site.sass'

export default appWithTranslation(function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LayoutComponent>
            <Component {...pageProps} />
        </LayoutComponent>
    );
})
