// ** MUI Imports
import { PaletteMode } from '@mui/material'

// ** Types
import { ContentWidth } from 'src/@core/layouts/types'
import {useBoundStore} from "../stores/hooks/useBoundStore";

type ThemeConfig = {
  mode: PaletteMode
  templateName: string
  routingLoader: boolean
  disableRipple: boolean
  navigationSize: number
  menuTextTruncate: boolean
  contentWidth: ContentWidth
  responsiveFontSizes: boolean
}

const themeConfig: ThemeConfig = {
  // ** Layout Configs
  templateName: 'ЖКХ 2.0' /* App Name */,
  mode: useBoundStore.getState().materialTheme /* light | dark */,
  contentWidth: 'boxed' /* full | boxed */,

  // ** Routing Configs
  routingLoader: true /* true | false */,

  // ** Navigation (Menu) Configs
  menuTextTruncate: true /* true | false */,
  navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,

  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */,

}

export default themeConfig
