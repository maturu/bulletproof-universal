import { createTamagui } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'
import { animationsConfig } from './animations'
import { bodyFont, headingFont } from './fonts'

export const config = createTamagui({
  ...defaultConfig,
  animations: animationsConfig,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
})
