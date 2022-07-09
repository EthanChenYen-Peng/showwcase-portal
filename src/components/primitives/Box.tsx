import styled from 'styled-components'
import { space, color, border, layout, flexbox, grid } from 'styled-system'
import type {
  SpaceProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  GridProps,
  FlexboxProps,
} from 'styled-system'

export type BoxProps =
  | SpaceProps
  | ColorProps
  | BorderProps
  | LayoutProps
  | GridProps
  | FlexboxProps

const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${space}
  ${color}
	${border}
	${layout}
	${flexbox}
	${grid}
`
export default Box
