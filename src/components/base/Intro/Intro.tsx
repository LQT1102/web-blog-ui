import { Box, Flex, Heading, ScaleFade, Slide } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { animated, useSpring, useTrail, a } from "@react-spring/web";

type Props = {};

export default function Intro({}: Props) {
    const particlesInit = async (main: any) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container: any) => {
        console.log(container);
    };

    const customInit = useCallback(async (engine: Engine) => {
        // this adds the bundle to tsParticles
        await loadFull(engine);
    }, []);

    const options = {
        /* custom options */
        fullScreen: {
            enable: false,
        },
        background: {
            color: {
                value: "#ffffff",
                // value: "#252934",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 100,
                    duration: 50,
                },
            },
        },
        particles: {
            color: {
                value: "#97b4de",
            },
            links: {
                color: "#97b4de",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                enable: true,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const items = [
        <Box fontSize={"5xl"} color={"#000000"} fontWeight={"semibold"}>
            EZ-DEV Blog
        </Box>,
        <Box color={"primary.200"} fontSize={"lg"}>
            Chia sẻ mọi thứ về công nghệ, lập trình website.
        </Box>,
    ];

    const styles1 = useTrail(items.length, {
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -300,
    });

    return (
        <Box w={"full"} h={"400px"} my={4} position={"relative"}>
            <Flex
                position={"absolute"}
                top={0}
                left={0}
                w={"full"}
                h={"full"}
                zIndex={9999}
                align={"center"}
                justify={"center"}
                direction={"column"}
            >
                {/* <animated.div style={styles}>
                    <Heading>Best website</Heading>
                </animated.div> */}
                {styles1.reverse().map((style, index) => {
                    return (
                        <a.div key={index} style={style}>
                            {items[index]}
                        </a.div>
                    );
                })}
            </Flex>
            <Particles
                height={"400px"}
                options={options as any}
                init={customInit}
            />
        </Box>
    );
}
