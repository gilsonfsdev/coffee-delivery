import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin-bottom: 1.5rem;
  padding: 0.5rem 0rem;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20%;
    height: 20%;
  }

  @media (max-width: 998px) {
    width: 110%;
  }
`

export const QuantityLayout = styled.div`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    background: ${(props) => props.theme['base-button']};
    padding: 0rem 0.5rem;
    border-radius: 6px;
    border: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`
