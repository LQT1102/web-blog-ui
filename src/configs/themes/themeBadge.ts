import{ mode  } from "@chakra-ui/theme-tools"
import type {
    SystemStyleFunction,
    SystemStyleObject,
  } from "@chakra-ui/theme-tools"

const variantcustomOutline: SystemStyleFunction = (props) => {
    const { colorScheme: c, theme } = props
    const color = mode("primary.100", "primary.100")(props)
    console.log(color)
    console.log(props)
    return {
      color,
      boxShadow: `inset 0 0 0px 1px`,
      opacity: 0.5
    }
  }

const variants = {
    customOutline: variantcustomOutline,
  }

export default {
variants
}