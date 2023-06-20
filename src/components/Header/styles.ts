import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fff;
  position: fixed;
  height: 104px;
  left: 120px;
  right: 120px;
  top: 0px;
`

export const ShoppingCartDiv = styled.div`
  display: flex;
  gap: 0.8rem;

  img {
    background: transparent;
  }

  div {
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 8px;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      background: transparent;
    }
  }

  span {
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`
