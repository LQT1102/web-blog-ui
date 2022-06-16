import { Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function AboutMeCard({}: Props) {
    return (
        <Flex
            w={"full"}
            justify={"center"}
            gap={6}
            h={"fit-content"}
            direction={"column"}
            align={"center"}
            p={4}
            boxShadow={"primary"}
            borderRadius={8}
        >
            <Avatar size="2xl" src={"https://bit.ly/code-beast"} />

            <Flex direction={"column"}>
                <Box textAlign={"center"} fontSize={"lg"} fontWeight={"bold"}>
                    Lê Quốc Tuấn
                </Box>
                <Box textAlign={"center"} color={"primary.300"} fontSize={"md"}>
                    Author
                </Box>
            </Flex>

            <Box textAlign={"center"} color={"primary.300"}>
                Xin chào, mình là Tuấn. Một cậu bé đang tập tành viết Blog 🐣
            </Box>
        </Flex>
    );
}
