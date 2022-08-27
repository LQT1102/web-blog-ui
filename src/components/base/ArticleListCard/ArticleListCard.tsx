import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import TitleOfList from "../TitleOfList/TitleOfList";
import Link from "next/link";

type Props = {
    articleList?: {
        title: string;
        id: string;
    }[];
};

export default function ArticleListCard({ articleList }: Props) {
    return (
        <Flex
            direction={"column"}
            gap={3}
            boxShadow={"primary"}
            p={4}
            rounded={"8px"}
            minH={"200px"}
        >
            <TitleOfList title="Latest posts" />

            {articleList?.map((item, index) => (
                <Link href={"#"} key={index}>
                    <Flex
                        align={"center"}
                        _hover={{
                            bg: "primary.400",
                        }}
                        py={2}
                        mx={-2}
                        px={2}
                        borderRadius={"4px"}
                    >
                        <Box
                            minW={0}
                            flex={1}
                            fontSize={"md"}
                            color={"primary.200"}
                            cursor={"pointer"}
                            noOfLines={2}
                        >
                            {item.title}
                        </Box>
                        <ChevronRightIcon />
                    </Flex>
                </Link>
            ))}
        </Flex>
    );
}
