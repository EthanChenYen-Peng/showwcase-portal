import styled from 'styled-components'
import Text from './Text'

const BaseInput = Text.withComponent('input')

const Input = styled(BaseInput)`
  padding: 0.5rem 1rem;
`

export default Input
