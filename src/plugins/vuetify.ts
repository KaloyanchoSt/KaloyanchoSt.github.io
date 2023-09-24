/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, ThemeDefinition  } from 'vuetify'

//import colors from 'vuetify/lib/util/colors'
import { md3 } from 'vuetify/blueprints'
// const myCustomLightTheme: ThemeDefinition = {
//   dark: false,
//   colors: {
//     background: '#F3F3F3',
//     surface: '#FFFFFF',
//     primary: '#1867C0',
//     'primary-darken-1': '#3700B3',
//     secondary: '#5CBBF6',
//     'secondary-darken-1': '#018786',
//     error: '#B00020',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//   },
// }

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  // theme: {
  //   themes: {
  //     light: {
  //       primary: colors.blue,
  //       secondary: colors.grey.darken1,
  //       accent: colors.shades.black,
  //       error: colors.red.accent3,
  //       background: colors.red.accent3, // Not automatically applied
  //     },
  //     dark: {
  //       primary: colors.blue.lighten3, 
  //       background: colors.indigo.base, // If not using lighten/darken, use base to return hex
  //     },
  //   },
  // },
})
