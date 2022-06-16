import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
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
                <Link to={"#"} key={index}>
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
