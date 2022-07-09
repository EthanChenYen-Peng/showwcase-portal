import styled from 'styled-components'
import { typography, layout, space } from 'styled-system'
import type { TypographyProps, LayoutProps, SpaceProps } from 'styled-system'

type Props = SpaceProps | TypographyProps | LayoutProps

const BaseText = styled.input<Props>`
  ${space}
  ${typography}
  ${layout}
`
export default BaseText
