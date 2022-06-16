import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./configs/themeConfig";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
const queryClient = new QueryClient();
import "./translations/i18n";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider theme={theme} resetCSS={true}>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <HelmetProvider>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </HelmetProvider>
                </ChakraProvider>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);
