import styled from 'styled-components'

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  height: 260px;
  justify-content: space-between;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 1rem;
  text-align: center;

  div {
    display: flex;
    gap: 0.25rem;
  }

  img {
    background: transparent;
    margin-top: -2.5rem;
  }

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.1rem;
  }
`

export const Paragráfo = styled.p`
  color: ${(props) => props.theme['base-label']};
  font-weight: 400;
  font-size: 0.9rem;
`

export const Span = styled.span`
  background: #f1e9c9;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 0.6rem;
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 700;
  padding: 0.3rem;
  margin-bottom: 0.5rem;
`

export const AddProducts = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.7rem;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    background: none;
    font-size: 1.125rem;
  }

  img {
    margin-bottom: -2.45rem;
    height: 1.8rem;
  }
`

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
