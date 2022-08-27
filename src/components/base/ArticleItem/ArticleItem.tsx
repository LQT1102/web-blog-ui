import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
    imageUrl: string;
};

export default function ArticleItem({ imageUrl }: Props) {
    const breakpoint = "lg";
    return (
        <Link href={"articles/123"}>
            <Flex
                boxShadow={"primary"}
                borderRadius={8}
                gap={10}
                direction={{ base: "column", [breakpoint]: "row" }}
                p={4}
            >
                <Image
                    src={imageUrl}
                    h={"auto"}
                    maxW={{ base: "100%", [breakpoint]: "50%" }}
                    objectFit={"cover"}
                />
                <Flex direction={"column"} flex={1} minW={0} gap={3}>
                    <Flex direction={"column"}>
                        <Box
                            color={"primary.100"}
                            fontSize={"3xl"}
                            fontWeight={"bold"}
                            noOfLines={3}
                        >
                            Amet non Ex Officia nulla Cupidatat
                        </Box>
                    </Flex>

                    <Flex gap={1}>
                        <Badge colorScheme="gray" variant={"customOutline"}>
                            React
                        </Badge>
                        <Badge colorScheme="gray" variant={"customOutline"}>
                            Javascript
                        </Badge>
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

                    <Text
                        fontSize={"md"}
                        color={"primary.100"}
                        fontWeight={"normal"}
                        noOfLines={5}
                    >
                        Sint anim Lorem aute duis Lorem incididunt. Nulla
                        nostrud irure id ipsum aute excepteur duis sint. Do
                        occaecat sit dolor magna esse. Mollit incididunt cillum
                        consectetur fugiat adipisicing dolor est id minim amet
                        cillum esse Lorem. Deserunt non duis excepteur aliqua
                        duiseu reprehenderit.
                    </Text>
                </Flex>
            </Flex>
        </Link>
    );
}
