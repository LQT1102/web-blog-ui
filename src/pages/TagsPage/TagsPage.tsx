import { Flex } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../../components/base/SearchBar/SearchBar";
import TagItem from "../../components/base/TagItem/TagItem";

type Props = {};

export default function TagsPage({}: Props) {
    return (
        <Flex
            w={"full"}
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap={20}
            cursor={"pointer"}
        >
            <SearchBar
                borderRadius={"50px"}
                placeholder={"Find the topics you care about..."}
            />
            <Flex justify={"center"} flexWrap={"wrap"} gap={3}>
                <TagItem tagName="tech" />
                <TagItem tagName="tech" />
            </Flex>
        </Flex>
    );
}
