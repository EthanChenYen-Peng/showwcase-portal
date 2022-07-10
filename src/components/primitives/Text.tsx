import styled from 'styled-components'
import { typography, layout, space } from 'styled-system'
import type { TypographyProps, LayoutProps, SpaceProps } from 'styled-system'

type Props = SpaceProps | TypographyProps | LayoutProps

const Text = styled.p<Props>`
  ${space}
  ${typography}
  ${layout}
`
export default Text
