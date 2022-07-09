import styled from 'styled-components'
import Flex from './Flex'

interface Props {
  gap?: string
}
const Stack = styled(Flex)<Props>`
  flex-direction: column;
  gap: ${({ gap }) => gap};
`
export default Stack
