import { mode, PartsStyleFunction } from "@chakra-ui/theme-tools";

function getDefaults(props: Record<string, any>) {
    const { focusBorderColor: fc, errorBorderColor: ec } = props
    return {
      focusBorderColor: fc || mode("blue.500", "blue.300")(props),
      errorBorderColor: ec || mode("red.500", "red.300")(props),
    }
  }

  const variantCustomNormal: PartsStyleFunction<any> = (props) => {
    const { theme } = props;
    const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props)
    console.log(ec)
    return {
      field: {
        border: "1px solid",
        borderColor: "primary.200",
        bg: "inherit",
        _hover: {
        //   borderColor: mode("gray.300", "whiteAlpha.400")(props),
        },
        _readOnly: {
          boxShadow: "none !important",
          userSelect: "all",
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
        },
        _invalid: {
        //   borderColor: getColor(theme, ec),
        //   boxShadow: `0 0 0 1px ${getColor(theme, ec)}`,
        },
        _focusVisible: {
          zIndex: 1,
        },
      },
      addon: {
      },
    }
  }

  const variants = {
    customNormal: variantCustomNormal
  }

  export default {
    variants
  }