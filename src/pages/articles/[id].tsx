import { Badge, Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function ArticleDetail({}: Props) {
    return (
        <Flex w={"full"} direction={"column"}>
            <Flex w={"full"} direction={"column"} gap={3}>
                <Heading>
                    The World’s Most Dangerous Technology Ever Made.
                </Heading>
                <Flex gap={1}>
                    <Link href={"#"}>
                        <Badge colorScheme="gray" variant={"customOutline"}>
                            React
                        </Badge>
                    </Link>
                    <Link href={"#"}>
                        <Badge colorScheme="gray" variant={"customOutline"}>
                            Javascript
                        </Badge>
                    </Link>
                </Flex>

                <Flex
                    gap={3}
                    color={"primary.200"}
                    fontSize={"md"}
                    opacity={0.5}
                >
                    <Box>Leslie Pena</Box>
                    <Box
                        position={"relative"}
                        _before={{
                            content: `"."`,
                            position: "absolute",
                            top: "-4px",
                            fontWeight: "bold",
                        }}
                    />
                    <Box>April 25, 2012 (6 mins read)</Box>
                </Flex>
            </Flex>
        </Flex>
    );
}
