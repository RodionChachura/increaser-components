import * as React from 'react'
import styled from 'styled-components'
import { centerContentStyle } from './mixins';
import { QUOTES } from '../constants/quotes';

const Quote = styled.div`
  ${centerContentStyle};
  flex-direction: column;
`

const Author = styled.p`
  color: ${p => p.theme.color.secondaryFont};
  margin-top: 10px;
`

const Text = styled.p`
  color: ${p => p.theme.color.mainFont}; 
  text-align: center;
  font-style: italic;
`

interface Props {}

interface State {
  author: string,
  text: string
}

export default class extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // for testing(longest):
    // const quote = QUOTES.sort((a, b) => a.text.length > b.text.length ? -1 : 1)[0]
    const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)]
    this.state = quote
  }

  render() {
    const { text, author } = this.state
    
    return (
      <Quote>
        <Text>"{text}"</Text>
        <Author>{author}</Author>
      </Quote>
    )
  }
}