import { Colors, extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/theme-tools'
import themeBadge from "./themes/themeBadge";
import themeInput from "./themes/themeInput";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

// const colors : Colors = {
//     primary: (props : any) => {
//       return {
//         900: "#000000"
//       }
//     }
// }

// 3. extend the theme
const theme = extendTheme({ 
  config,
  semanticTokens: {
    colors: {
      "bg": { default: "#ffffff", _dark: "red.200" },
      "errorBorderColor": {default: "red.500"},
      "primary.100": { default: "#000000", _dark: "red.200" },
      "primary.200": {default: "#1C1C1C",},
      "primary.300": {default: "rgba(28, 28, 28, 0.5)",},
      "primary.400": {default: "rgba(0,0,0,.03)"},
    },
    shadows:{
      "primary": {default: "0 10px 25px 0 rgb(27 44 113 / 15%)"}
    }
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: (props : any) => {
        return {
          fontWeight: 'bold',
          color: "error"
        }
      }
    }, 
    Input: themeInput,
    Badge: themeBadge
  }
 })

export default theme