import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import AboutMeCard from "../../components/base/AboutMeCard/AboutMeCard";
import ArticleItem from "../../components/base/ArticleItem/ArticleItem";
import Intro from "../../components/base/Intro/Intro";

type Props = {};

export default function HomePage({}: Props) {
    return (
        <Flex flex={1} minW={0} direction={"column"} gap={6}>
            <ArticleItem imageUrl="https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg" />

            <ArticleItem imageUrl="https://mondaycareer.com/wp-content/uploads/2020/11/background-%C4%91%E1%BA%B9p-3-1.jpg" />
        </Flex>
    );
}
