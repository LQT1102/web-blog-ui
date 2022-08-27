import {
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    List,
    ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/assets/images/logo.svg";
import SearchBar from "../../components/base/SearchBar/SearchBar";

type Props = {};

export default function Header({}: Props) {
    const [headerFixed, setHeaderFixed] = useState(false);
    const menuItems = [
        {
            title: "Home",
            to: "/",
        },
        {
            title: "Tags",
            to: "tags",
        },
        {
            title: "About",
            to: "about",
        },
    ];

    const handleScroll = () => {
        setHeaderFixed(!!document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Flex
            minH={"14"}
            as={"header"}
            bg={"bg"}
            position={"sticky"}
            top={0}
            left={0}
            align={"center"}
            zIndex={99999}
            px={{ base: 0, md: 6 }}
            boxShadow={headerFixed ? "primary" : "none"}
            py={headerFixed ? 1 : 0}
        >
            <Link href={"/"}>
                <Image src={Logo} />
            </Link>
            <List display={"flex"} gap={"8"}>
                {menuItems.map((item, index) => (
                    <ListItem
                        key={index}
                        _hover={{
                            textDecoration: "underline",
                            color: "primary.100",
                        }}
                        fontSize={"xl"}
                        color={"primary.200"}
                    >
                        <Link href={item.to}>{item.title}</Link>
                    </ListItem>
                ))}
            </List>
            <Flex flex={1} minW={0} />
            <SearchBar isButton={true} />
        </Flex>
    );
}
