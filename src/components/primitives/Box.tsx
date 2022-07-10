import styled from 'styled-components'
import {
  shadow,
  space,
  color,
  border,
  layout,
  flexbox,
  grid,
} from 'styled-system'
import type {
  SpaceProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  GridProps,
  FlexboxProps,
  ShadowProps,
} from 'styled-system'

export type BoxProps =
  | SpaceProps
  | ColorProps
  | BorderProps
  | LayoutProps
  | GridProps
  | FlexboxProps
  | ShadowProps

const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${space}
  ${color}
	${border}
	${layout}
	${flexbox}
	${grid}
  ${shadow}
`
export default Box
