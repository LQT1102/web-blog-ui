import { Button, Heading, HStack, useColorMode } from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import demoMachine from "../machines/demoMachine";
import { increase } from "../redux/slices/demoSlice";
import { RootState } from "../redux/store";

type Props = {};

export default function DemoPage({}: Props) {
    const { t, i18n } = useTranslation();
    const { count } = useSelector((state: RootState) => state.demo);
    const { colorMode, toggleColorMode } = useColorMode();
    const dispatch = useDispatch();
    const [current, send] = useMachine(demoMachine);

    const toggleLangue = () => {
        const currentLang = i18n.language;
        if (currentLang === "vi") i18n.changeLanguage("en");
        else i18n.changeLanguage("vi");
    };

    console.log("colorMode: " + colorMode);

    return (
        <HStack h={"1000px"}>
            <Heading>{t("hello")}</Heading>

            <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
                {colorMode} - Toggle Mode
            </Button>

            <Button
                size="sm"
                fontFamily={"OpenSans"}
                colorScheme="green"
                onClick={() => {
                    toggleLangue();
                }}
            >
                {i18n.language} - Toggle Language
            </Button>

            <Button
                size="sm"
                colorScheme="orange"
                onClick={() => {
                    dispatch(increase({}));
                }}
            >
                Redux: Increase count: {count}
            </Button>

            <Button
                onClick={() => send("TOGGLE")}
                size="sm"
                colorScheme="purple"
            >
                Xstate:{" "}
                {current.value === "inactive"
                    ? "Click to activate"
                    : "Active! Click to deactivate"}
            </Button>

            <Button>test</Button>
        </HStack>
    );
}
