import styled from 'styled-components'

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0.4rem;
  border-radius: 6px;

  p {
    color: ${(props) => props.theme['base-title']};
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    border: none;
    background: transparent;
    color: ${(props) => props.theme['purple-base']};
    cursor: pointer;
  }
`
