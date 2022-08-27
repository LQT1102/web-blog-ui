import { Box, ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { AppPropsWithLayout } from "../types/common";
import { Fragment } from "react";

const languages = {
    vi: require("../../public/locales/vi/lang.json"),
    en: require("../../public/locales/en/lang.json"),
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? Fragment;
    const router = useRouter();
    const { locale, defaultLocale } = router;
    const messages = languages[locale];
    return (
        <IntlProvider
            messages={messages}
            locale={locale}
            defaultLocale={defaultLocale}
        >
            <Provider store={store}>
                <ChakraProvider theme={theme} resetCSS={true}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            </Provider>
        </IntlProvider>
    );
}

export default MyApp;
