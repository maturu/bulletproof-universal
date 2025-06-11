import { createTamagui } from 'tamagui'
import { animations, defaultConfig } from '@tamagui/config/v4'
import { body, heading } from './fonts'

export const config = createTamagui({
  ...defaultConfig,
  animations,
  fonts: {
    body,
    heading,
  },
})
