import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import TitleOfList from "../TitleOfList/TitleOfList";

type Props = {
    tags?: string[];
};

export default function TagListCard({ tags }: Props) {
    return (
        <Flex
            direction={"column"}
            gap={5}
            boxShadow={"primary"}
            p={4}
            rounded={"8px"}
            minH={"200px"}
        >
            <TitleOfList title="Tags" />

            {tags?.map((item, index) => (
                <Link href={"#"} key={index}>
                    <Box
                        key={index}
                        fontSize={"md"}
                        color={"primary.200"}
                        cursor={"pointer"}
                        _hover={{
                            color: "primary.200",
                            textDecoration: "underline",
                        }}
                    >
                        #{item}
                    </Box>
                </Link>
            ))}
        </Flex>
    );
}
