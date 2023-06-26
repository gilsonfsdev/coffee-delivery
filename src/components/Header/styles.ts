import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  padding: 0rem 3rem;

  background: #fff;
  position: fixed;
  height: 104px;
  left: 0;
  right: 0;
  top: 0px;

  @media (min-width: 1180px) {
    max-width: 75rem;
  }
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
    position: relative;
  }
`
export const P = styled.p`
  position: absolute;
  top: -10px;
  right: -5px;

  background: ${(props) => props.theme['yellow-dark']};
  color: #fff;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.4rem;
`
