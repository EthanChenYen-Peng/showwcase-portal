import styled from 'styled-components'
import BaseText from './BaseText'

const BaseInput = BaseText.withComponent('input')

const Input = styled(BaseInput)`
  padding: 0.5rem 1rem;
`

export default Input
