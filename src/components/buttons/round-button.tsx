import * as React from 'react'
import styled, { css, keyframes } from '../../styled-components'


interface Props {
  size: string,
  type: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  calling: Boolean
}

const SIZE = {
  l: '60px',
  m: '50px',
  s: '40px'
}

const FONT_SIZE = {
  l: '20px',
  m: '16px',
  s: '14px'
}

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  70% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`

const Button = styled.button<{ color: string, size: string, calling: Boolean }>`
  background-color: ${p => p.theme.color[p.color]};
  font-size: ${p => FONT_SIZE[p.size]};
  border: none;
  color: ${p => p.theme.color.mainFont};
  width: ${p => SIZE[p.size]};
  height: ${p => SIZE[p.size]};
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  box-shadow: ${p => p.theme.shadow.default};
  &:hover {
    background-color: ${p => p.theme.colorHover[p.color]};
    transition: ${p => p.theme.transition.default};
  }
  ${p => p.calling && css`animation: ${pulseAnimation} 1.5s infinite;`}
`

const RoundButton: React.SFC<Props> = ({ size, type, onClick, children, calling = false }) => {
  return (
    <Button size={size} color={type} onClick={onClick} calling={calling}>
      {children}
    </Button>
  )
}

export default RoundButton