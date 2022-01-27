import styled from 'styled-components'

export const Block = styled.div`
  border: thin solid black;
  width: 10rem;
  text-align: center;
  font-size: 3.5vw;

  &:nth-child(3n) {
    border-right: thick solid black;
  }

  &:first-child {
    border-left: thick solid black;
  }

  &:last-child {
    border-right: thick solid black;
  }
`
