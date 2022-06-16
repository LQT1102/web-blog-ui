import { Flex } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
    return (
        <Flex w={"full"} bg={"primary.200"} mt={6}>
            <Flex></Flex>
            <Flex
                w={"full"}
                py={"30px"}
                bg={"primary.200"}
                justify={"center"}
                fontWeight={"bold"}
                color={"white"}
            >
                © 2022 the ez-dev.net
            </Flex>
        </Flex>
    );
}
