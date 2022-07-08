import styled from 'styled-components'
import { color, ColorProps } from 'styled-system'

export default function Register() {
  return (
    <Container bg="dark" color="white">
      Register
    </Container>
  )
}

const Container = styled.div<ColorProps>`
  ${color}
`
