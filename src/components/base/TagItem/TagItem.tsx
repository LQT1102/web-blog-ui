import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
    tagName: string;
};

export default function TagItem({ tagName }: Props) {
    return (
        <Box
            py={2}
            px={3}
            border={"1px solid"}
            borderColor={"primary.100"}
            borderRadius={"50px"}
            fontSize={"md"}
            color={"primary.100"}
        >
            #{tagName}
        </Box>
    );
}
