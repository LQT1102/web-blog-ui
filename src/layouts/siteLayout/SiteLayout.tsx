import { Box, Container, Flex } from "@chakra-ui/react";
import { useEffect, useLayoutEffect } from "react";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AboutMeCard from "../../components/base/AboutMeCard/AboutMeCard";
import ArticleListCard from "../../components/base/ArticleListCard/ArticleListCard";
import Intro from "../../components/base/Intro/Intro";
import TagListCard from "../../components/base/TagListCard/TagListCard";
import { LayoutProps } from "../../types/common";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function SiteLayout({ children }: LayoutProps) {
    // const location = useLocation();
    // useLayoutEffect(() => {
    //     document.documentElement.scrollTo(0, 0);
    // }, [location.pathname]);

    // const isHomePage = location.pathname === "/";
    const isHomePage = true;

    return (
        <Flex
            as={"main"}
            w={"full"}
            minH={"100vh"}
            pt={"29px"}
            direction={"column"}
        >
            {/* Header */}
            <Header />

            {/* Main content */}
            <Flex direction={"column"} px={{ base: 0, md: 6 }}>
                <Flex direction={"row"}>
                    <Flex w={"full"} direction={"column"}>
                        {isHomePage && <Intro />}

                        <Container
                            maxW={{
                                xl: "container.xl",
                                md: "container.md",
                                sm: "container.sm",
                                lg: "container.lg",
                            }}
                        >
                            <Flex
                                gap={"20"}
                                pt={isHomePage ? 20 : "120px"}
                                direction={{ base: "column", md: "row" }}
                            >
                                <Flex
                                    flex={1}
                                    minW={0}
                                    direction={"column"}
                                    gap={6}
                                >
                                    {children}
                                </Flex>
                                <Flex
                                    w={{ base: "full", md: "325px" }}
                                    maxW={"full"}
                                    gap={10}
                                    direction={"column"}
                                >
                                    <AboutMeCard />
                                    <ArticleListCard
                                        articleList={[
                                            {
                                                id: "1",
                                                title: "Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duiseu",
                                            },
                                            {
                                                id: "2",
                                                title: "Amet non Ex Officia nulla Cupidatat",
                                            },
                                        ]}
                                    />
                                    <TagListCard
                                        tags={["React", "Javascript", "NodeJS"]}
                                    />
                                </Flex>
                            </Flex>
                        </Container>
                    </Flex>
                </Flex>
            </Flex>
            <Box flex={1} />
            <Footer />
        </Flex>
    );
}
