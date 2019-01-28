import styled from 'styled-components'

export default styled.button`
  color: ${p => p.theme.color.mainFont};
  position: absolute;
  top: 62.8%;
  height: 8%;
  width: 24%;
  font-size: 2.6vmin;

  background-color: ${p => p.theme.color.default};
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: ${p => p.theme.shadow.default};
  &:hover {
    background-color: ${p => p.theme.colorHover.default};
    transition: ${p => p.theme.transition.default};
  }
  @media (max-width: 800px) {
    top: auto;
    bottom: 5%;
    height: 60px;
    width: 160px;
    font-size: 24px;
  }
`