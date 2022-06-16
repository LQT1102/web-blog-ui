import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
    title: string;
};

export default function TitleOfList({ title }: Props) {
    return (
        <Box
            position={"relative"}
            overflow={"hidden"}
            pb={2}
            _after={{
                content: `""`,
                position: "absolute",
                bottom: 0,
                width: "full",
                borderBottom: "2px solid",
                borderColor: "#eee",
            }}
            _before={{
                content: `""`,
                position: "absolute",
                bottom: 0,
                width: "full",
                borderBottom: "2px solid",
                borderColor: "primary.100",
            }}
        >
            <Box
                as={"span"}
                fontSize={"xl"}
                color={"primary.300"}
                fontWeight={"bold"}
            >
                {title}
            </Box>
        </Box>
    );
}
