import styled from 'styled-components'
import Box from './Box'

interface Props {
  gap?: string
}
const Flex = styled(Box)<Props>`
  display: flex;
  gap: ${({ gap }) => gap};
`

export default Flex
