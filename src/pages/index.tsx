import { Button, Flex, Heading, HStack, useColorMode } from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ArticleItem from "../components/base/ArticleItem/ArticleItem";
import SiteLayout from "../layouts/siteLayout/SiteLayout";
import demoMachine from "../machines/demoMachine";
import { increase } from "../redux/slices/demoSlice";
import { RootState } from "../redux/store";
import { NextPageWithLayout } from "../types/common";
import { t } from "../utils/translation";

const Home: NextPageWithLayout = () => {
    const { count } = useSelector((state: RootState) => state.demo);
    const { colorMode, toggleColorMode } = useColorMode();
    const dispatch = useDispatch();
    const [current, send] = useMachine(demoMachine);
    const { locale } = useRouter();

    const toggleLangue = () => {
        // const currentLang = i18n.language;
        // if (currentLang === "vi") i18n.changeLanguage("en");
        // else i18n.changeLanguage("vi");
    };

    console.log("colorMode: " + colorMode);

    return (
        <Flex flex={1} minW={0} direction={"column"} gap={6}>
            <ArticleItem imageUrl="https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg" />

            <ArticleItem imageUrl="https://mondaycareer.com/wp-content/uploads/2020/11/background-%C4%91%E1%BA%B9p-3-1.jpg" />
        </Flex>
    );
};

Home.Layout = SiteLayout;

export default Home;
