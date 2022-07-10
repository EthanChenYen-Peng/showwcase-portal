import styled from 'styled-components'
import {
  variant,
  space,
  border,
  layout,
  typography,
  flexbox,
} from 'styled-system'
import type {
  SpaceProps,
  BorderProps,
  LayoutProps,
  TypographyProps,
  FlexboxProps,
} from 'styled-system'

interface Props {
  variant: 'primary' | 'secondary'
}
const Button = styled('button')<
  | Props
  | SpaceProps
  | BorderProps
  | LayoutProps
  | TypographyProps
  | FlexboxProps
>(
  {
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  space,
  border,
  layout,
  typography,
  flexbox,
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'accent',
        '&:hover:not(:disabled)': {
          bg: 'accentDark',
        },
      },
      secondary: {
        color: 'accent',
        bg: 'white',
        '&:hover:not(:disabled)': {
          bg: 'lightgray',
        },
      },
    },
  })
)

export default Button
