import styled from 'styled-components'

interface LabelProps {
  text: string
}

const TextLabelStyle = styled.div`
  padding: 0.5rem 0.8rem;
`

const TextLabel: React.FC<LabelProps> = (props) => {
  const { text } = props
  return <TextLabelStyle>{text}</TextLabelStyle>
}

export default TextLabel
