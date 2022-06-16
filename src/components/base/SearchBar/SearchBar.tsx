import {
    Collapse,
    IconButton,
    Input,
    InputGroup,
    InputProps,
    InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import { useOutsideClick } from "@chakra-ui/react";

interface Props extends InputProps {
    isButton?: boolean;
}

export default function SearchBar({ isButton, ...rest }: Props) {
    const [showInput, setShowInput] = useState(!isButton);
    const inputRef = useRef<HTMLInputElement>(null);

    useOutsideClick({
        ref: inputRef,
        handler: () => {
            setShowInput(false);
        },
    });

    return (
        <InputGroup maxW={"360px"} minH={10} w={"auto"} transition={"width 2s"}>
            {(!isButton || showInput) && (
                <Input
                    width={"360px"}
                    autoFocus
                    ref={inputRef}
                    variant={"customNormal"}
                    {...rest}
                />
            )}
            <InputRightElement
                children={
                    <IconButton
                        onClick={() => {
                            isButton && !showInput && setShowInput(true);
                        }}
                        aria-label="Search database"
                        variant={"unstyled"}
                        icon={<Search2Icon />}
                    />
                }
            />
        </InputGroup>
    );
}
