import styled from 'styled-components'

export const SucessContainer = styled.div`
  margin-top: 6.5rem;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 6.3rem;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  img {
    @media (max-width: 980px) {
      margin: 0 auto;
    }
  }
`

export const OrderDetails = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 2rem;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme['purple-base']};

  div {
    display: flex;
    gap: 0.75rem;
    align-items: start;
    font-size: 0.95rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  @media (max-width: 980px) {
    margin: 2.5rem auto 0;
    max-width: 500px;
  }
`

export const FontWeight = styled.span`
  font-weight: 700;
`
